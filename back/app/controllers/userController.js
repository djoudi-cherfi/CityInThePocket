import { compareSync, hashSync } from 'bcrypt';

import jwt from 'jsonwebtoken';

import User from '../models/user';

import tokenService from '../services/configToken';

import transporter from '../services/email';

import emailTemplate from '../templates/emailTemplate';

const { sign, verify } = jwt;

const { sendMail } = transporter;

const { validationEmailData, forgetPasswordForm } = emailTemplate;

const { config, generateToken, refreshTokenExpires } = tokenService;

const { audience, algorithm, issuer } = config;

const userController = {

  getAll: async (req, res, next) => {
    try {
      const users = await User.findAll();

      if (users) {
        res.json(users);
      }
      else {
        // Sinon on passe a la page 404 car non trouvé

        next();
      }
    }
    catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getOneById: async (req, res, next) => {
    try {
      const userId = req.params.id;

      const user = await User.findOne(userId);

      // Si le produit est trouvé on l'affiche
      if (user) {
        res.json(user);
      }
      else {
        // Sinon on passe a la page 404 car non trouvé
        next();
      }
    }
    catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  addOne: async (req, res) => {
    const userForm = req.body;

    if (
      !req.body.firstName
      || !req.body.lastName
      || !req.body.email
      || !req.body.password
      || !req.body.confirmPassword
      || !req.body.phone_number
      || !req.body.address
      || !req.body.city
      || !req.body.postal_code
      || !req.body.policy_agree
    ) {
      res.status(400).json({ error: 'Il manque des informations dans le formulaire' });
    }
    else if (req.body.password !== req.body.confirmPassword) {
      res.status(400).json({ error: 'Les mots de passe ne correspondent pas' });
    }
    else {
      const newUser = await new User(userForm);

      const user = await newUser.save();

      const id = user.toString();

      const token = sign(
        { userId: id },
        process.env.ACCESS_TOKEN_SECRET,
        {
          audience, algorithm, expiresIn: '5m', subject: id, issuer,
        },
      );

      const link = `${process.env.URL_FRONT}/identity/user/validation/${id}/${token}`;

      sendMail(
        validationEmailData(
          newUser,
          link,
        ),
        (error, info) => {
          if (error) {
            console.error(error);
          }
          else {
            res.json({
              userId: user,
              info,
            });
          }
        },
      );
    }
  },

  // Need refacto
  validEmail: async (req, res) => {
    const user = await User.findOneEmail(req.body.email);

    if (user) {
      // Si l'email est déjà utilisé
      res.json({ isUnique: false });
    }
    else {
      // Si l'email n'est pas déjà utilisé
      res.json({ isUnique: true });
    }
  },

  // Need refacto
  validateAccount: async (req, res) => {
    try {
      const { id, token } = req.params;

      const user = await User.findOne(id);

      if (user.id !== parseInt(id, 10)) {
        res.json({ error: 'Invalid User Id' });
      }

      verify(
        token,
        process.env.ACCESS_TOKEN_SECRET,
        { algorithm: algorithm },
        async (error, response) => {
          if (error) {
            console.log(error.message);
            return res.status(401).json({ error: error.message });
          }

          if (response) {
            user.verified = true;

            const verifiedUser = new User(user);

            const saveVerifiedUser = await verifiedUser.save();

            res.status(200).json({ userId: saveVerifiedUser, message: 'utilisateur validé' });
          }
          return null;
        },
      );
    }
    catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Need refacto
  doLogin: async (req, res) => {
    const userForm = req.body;

    if (!userForm.email || !userForm.password) {
      res.status(400).json({ error: 'Email ou mot de passe manquant' });
    }
    else {
      const user = await User.findOneEmail(userForm.email);

      if (user) {
        const validatorPassword = compareSync(
          userForm.password,
          user.password,
        );

        if (validatorPassword) {
          const id = user.id.toString();

          const token = await generateToken(id);

          // On crée le cookie contenant le refresh token
          res.cookie(
            'refresh-token',
            token.refresh_token,
            {
              httpOnly: true,
              secure: true,
              maxAge: refreshTokenExpires,
              path: '/',
              // sameSite: 'strict',
            },
          );

          // On crée les informations de connexion et l'access token
          res.json({
            userId: user.id,
            firstname: user.firstname,
            logged: true,
            verified: user.verified,
            hasShop: user.has_shop,
            accessToken: token.access_token,
          });
        }
        else {
          res.status(400).json({ error: "L'email et le mot de passe ne correspondent pas" });
        }
      }
      else {
        res.status(400).json({ error: "L'email ne correspond a aucun utilisateur" });
      }
    }
  },

  refreshToken: async (req, res) => {
    try {
      const { cookies } = req;

      // On vérifie que le refresh-token est présent dans les cookies de la requête
      if (!cookies || !cookies['refresh-token']) {
        return res.status(401).json({ message: 'Refresh token manquant dans le cookie' });
      }

      const refreshToken = cookies['refresh-token'];

      // On vérifie et décode le JWT à l'aide du secret
      // et de l'algorithme utilisé pour le générer
      verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, {
        algorithm: algorithm,
      }, async (error, user) => {
        if (error) {
          return res.status(401).json({ error: error.message });
        }

        // On vérifie que l'utilisateur existe bien dans notre base de données
        const userFound = await User.findOne(user.userId);

        if (!userFound) {
          return res.status(401).json({ message: `L'utilisateur id : ${userFound} n'existe pas` });
        }

        const token = await generateToken(user.userId);

        // On crée le cookie contenant le refresh token
        res.cookie(
          'refresh-token',
          token.refresh_token,
          {
            httpOnly: true,
            secure: true,
            maxAge: refreshTokenExpires,
            path: '/',
            // sameSite: 'strict',
          },
        );

        // On crée les informations de connexion et l'access token
        res.json({
          accessToken: token.access_token,
        });

        return user;
      });
    }
    catch (error) {
      res.status(500).json({ error: error.message });
    }

    return null;
  },

  logout: (req, res) => {
    res.clearCookie('refresh_token');
    res.json({ info: 'Vous avez été déconnecté' });
  },

  forgetPassword: async (req, res) => {
    try {
      const { email } = req.body;

      const user = await User.findOneEmail(email);

      if (user) {
        const id = user.id.toString();

        const token = sign(
          { userId: id },
          process.env.ACCESS_TOKEN_SECRET,
          {
            audience, algorithm, expiresIn: '10m', subject: id, issuer,
          },
        );

        const link = `${process.env.URL_FRONT}/identity/reset-password/${id}/${token}`;

        sendMail(
          forgetPasswordForm(
            user,
            link,
          ),
          (error, info) => {
            if (error) {
              console.error(error);
            }
            else {
              res.json(info);
            }
          },
        );
      }
      else {
        res.json({ error: 'User not found' });
      }
    }
    catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  checkForNewPassword: async (req, res) => {
    try {
      const { id, token } = req.params;

      const user = await User.findOne(id);

      // Si le user est trouvé on l'affiche
      if (user.id !== parseInt(id, 10)) {
        res.json({ error: 'Invalid User Id' });
        return;
      }

      verify(
        token,
        process.env.ACCESS_TOKEN_SECRET,
        { algorithm: algorithm },
        async (error, response) => {
          if (error) {
            // console.log(error.message);
            return res.status(401).json({ error: error.message });
          }

          res.json({ email: user.email });

          return response;
        },
      );
    }
    catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  newPassword: async (req, res) => {
    try {
      const { id, token } = req.params;

      const { password, confirmPassword } = req.body;

      const user = await User.findOne(id);

      // Si user est trouvé on l'affiche
      if (user.id !== parseInt(id, 10)) {
        res.json({ error: 'Invalid User Id' });
      }

      verify(
        token,
        process.env.ACCESS_TOKEN_SECRET,
        { algorithm: algorithm },
        async (error, response) => {
          if (error) {
            console.log(error.message);
            return res.status(401).json({ error: error.message });
          }

          if (password === confirmPassword) {
            user.password = hashSync(
              password,
              10,
            );

            const newPass = new User(user);

            const saveNewPass = await newPass.save();

            res.json(saveNewPass);
          }
          else {
            res.json({ error: 'Les mots de passe ne correspondent pas' });
          }

          return response;
        },
      );
    }
    catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  deleteOneById: async (req, res, next) => {
    try {
      const { id } = req.params;

      const result = await User.findOne(id);
      if (result) {
        result.delete(id);
        res.json(result);
      }
      else {
        next();
      }
    }
    catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

export default userController;
