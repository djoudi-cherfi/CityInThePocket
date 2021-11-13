"use strict";

const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const tokenService = require("../services/token");
const transporter = require("../services/email");
const emailTemplate = require("../templates/emailTemplate");


const userController = {

    // Need refacto
    validEmail: async (req, res) => {
        const user = await User.findOneEmail(req.body.email);

        if (user) {
            // Si l'email est déjà utilisé
            res.json({ "isUnique": false });
        } else {
            // Si l'email n'est pas déjà utilisé
            res.json({ "isUnique": true });
        }
    },

    addOne: async (req, res) => {

        const userForm = req.body;

        if (!req.body.lastName || !req.body.firstName || !req.body.email ||
            !req.body.password || !req.body.confirmPassword ||
            !req.body.phone_number || !req.body.address || !req.body.city ||
            !req.body.postal_code || !req.body.conditions_privacy_policy) {

            res.status(400).json({ "error": "Il manque des informations dans le formulaire" });

        } else if (req.body.password !== req.body.confirmPassword) {

            res.status(400).json({ "error": "Les mots de passe ne correspondent pas" });

        } else {

            const newUser = await new User(userForm);

            const user = await newUser.save();

            const jwtContent = {
                userId: newUser.id,
                email: newUser.email
            };
            const secret = process.env.TOKEN_SECRET + user;

            const token = jwt.sign(
                jwtContent,
                secret,
                {
                    expiresIn: "25m"
                }
            );

            const link = `${process.env.BASE_URL}/email-validation/${newUser.id}/${token}`;

            transporter.sendMail(
                emailTemplate.validationEmailData(
                    newUser,
                    link
                ),
                (error, info) => {

                    if (error) {

                        console.error(error);

                    } else {

                        res.json({
                            userId: user,
                            info
                        });

                    }

                }
            );

        }

    },

    getAll: async (req, res, next) => {

        try {

            const users = await User.findAll();

            if (users) {

                res.json(users);

            } else {

                // Sinon on passe a la page 404 car non trouvé

                next();

            }

        } catch (error) {

            console.error(error);
            res.status(500).json({

                error: error.message

            });

        }

    },


    getOneById: async (req, res, next) => {

        try {

            const userId = req.params.id;

            const user = await User.findOne(userId);

            // Si le produit est trouvé on l'affiche
            if (user) {

                res.json(user);

            } else {

                // Sinon on passe a la page 404 car non trouvé

                next();

            }

        } catch (error) {

            console.error(error);
            res.status(500).json({
                error: error.message
            });

        }


    },

    // Need refacto
    doLogin: async (req, res) => {

        const userForm = req.body;

        if (!userForm.email || !userForm.password) {

            res.status(400).json({ "error": "Email ou mot de passe manquant" });

        } else {

            const user = await User.findOneEmail(userForm.email);

            if (user) {

                const validatorPassword = bcrypt.compareSync(
                    userForm.password,
                    user.password
                );

                if (validatorPassword) {

                    const askToken = await tokenService.generateToken(user.id);

                    /* On créer le cookie contenant le JWT */
                    res.cookie(
                        "access_token",
                        askToken.access_token,
                        {
                            httpOnly: true,
                            secure: true,
                            maxAge: 3600000
                            // sameSite: 'none'
                        }
                    );

                    /* On créer le cookie contenant le refresh token */
                    res.cookie(
                        "refresh_token",
                        askToken.refreshToken,
                        {
                            httpOnly: true,
                            secure: true,
                            maxAge: 3600000,
                            path: "/"
                            // sameSite: 'none'
                        }
                    );

                    res.json({
                        logged: true,
                        userId: user.id,
                        verified: user.verified,
                        refreshTokenExpiresIn: 900000,
                        accessTokenExpiresIn: 900000,
                        xsrfToken: askToken.xsrfToken
                    });

                } else {

                    res.status(400).json({ "error": "L'email et le mot de passe ne correspondent pas" });

                }

            } else {

                res.status(400).json({ "error": "L'email ne correspond a aucun utilisateur" });


            }

        }

    },


    deleteOneById: async (request, response, next) => {


        try {

            const { id } = request.params;

            const result = await User.findOne(id);
            if (result) {

                result.delete(id);
                response.json(result);

            } else {

                next();

            }


        } catch (error) {

            console.error(error);
            response.status(500).json({
                error: error.message
            });

        }

    },

    logout: (request, response) => {

        response.clearCookie("access_token");
        response.clearCookie("refresh_token");
        response.json({ "info": "Vous avez été déconnecté" });

    },

    // Need refacto
    refreshToken: async (req, res) => {

        try {

            const {
                refresh_token,
                access_token
            } = req.cookies;

            if (refresh_token) {

                const decodedToken = jwt.verify(
                    access_token,
                    process.env.TOKEN_SECRET
                );

                res.clearCookie("access_token");
                res.clearCookie("refresh_token");

                const askToken = await tokenService.generateToken(decodedToken.userId);

                /* On créer le cookie contenant le JWT */
                res.cookie(
                    "access_token",
                    askToken.access_token,
                    {
                        httpOnly: true,
                        secure: true,
                        maxAge: 3600000
                        // sameSite: 'none'
                    }
                );

                /* On créer le cookie contenant le refresh token */
                res.cookie(
                    "refresh_token",
                    askToken.refreshToken,
                    {
                        httpOnly: true,
                        secure: true,
                        maxAge: 3600000,
                        path: "/"
                        // sameSite: 'none'
                    }
                );

                res.json({
                    // tokenType: "Bearer",
                    logged: true,
                    userId: decodedToken.userId,
                    // access_token: access_token,
                    refreshTokenExpiresIn: 900000,
                    accessTokenExpiresIn: 900000,
                    xsrfToken: askToken.xsrfToken
                });

            } else {

                res.status(403).json({ "error": "Vous devez vous reconnecter" });

            }


        } catch (error) {

            console.error(error);
            res.status(500).json({
                error: error.message
            });

        }

    },

    forgetPassword: async (req, res) => {

        try {

            const { email } = req.body;

            const user = await User.findOneEmail(email);

            if (user) {

                const jwtContent = {
                    userId: user.id,
                    email: user.email
                };

                const secret = process.env.TOKEN_SECRET + user.password;

                const token = jwt.sign(
                    jwtContent,
                    secret,
                    {
                        expiresIn: "25m"
                    }
                );

                const link = `${process.env.BASE_URL}/identity/reset-password/${user.id}/${token}`;

                transporter.sendMail(
                    emailTemplate.forgetPasswordForm(
                        user,
                        link
                    ),
                    (error, info) => {

                        if (error) {

                            console.error(error);

                        } else {

                            res.json(info);

                        }

                    }
                );

            } else {

                res.json({ "error": "User not found" });

            }

        } catch (error) {

            console.error(error);
            res.status(500).json({
                error: error.message
            });

        }

    },
    checkForNewPassword: async (req, res) => {


        const {
            id,
            token
        } = req.params;


        const user = await User.findOne(id);

        // Si le produit est trouvé on l'affiche
        if (user.id !== parseInt(id)) {

            res.json({ "error": "Invalid User Id" });
            return;

        }

        const secret = process.env.TOKEN_SECRET + user.password;

        try {

            const payload = jwt.verify(
                token,
                secret
            );

            if (payload === true) {

                res.json({
                    email: user.email
                });

            } else {

                res.status(403).json({
                    "error": "payload invalide"
                });

            }

        } catch (error) {

            console.error(error);
            res.status(500).json({
                error: error.message
            });

        }


    },

    newPassword: async (req, res) => {

        const {
            id,
            token
        } = req.params;

        const {
            password,
            passwordConfirm
        } = req.body;

        const user = await User.findOne(id);
        console.log(
            "pass1",
            user.password
        );

        // Si le produit est trouvé on l'affiche
        if (user.id !== parseInt(id)) {

            res.json({ "error": "Invalid User Id" });
            return;

        }

        const secret = process.env.TOKEN_SECRET;

        try {

            const payload = jwt.verify(
                token,
                secret
            );

            if (payload === true) {


                if (password === passwordConfirm) {

                    user.password = bcrypt.hashSync(
                        password,
                        10
                    );

                    const newPass = new User(user);

                    const saveNewPass = await newPass.save();

                    res.json(saveNewPass);

                } else {

                    res.json({ "error": "Les mots de passe ne correspondent pas" });

                }

            } else {

                res.status(403).json({ "error": "payload invalide" });

            }

        } catch (error) {

            console.error(error);
            res.status(500).json({

                error: error.message
            });

        }


    },

    // Need refacto
    validateAccount: async (req, res) => {

        const {
            id,
            token
        } = req.params;

        const user = await User.findOne(id);
        if (user.id !== parseInt(id)) {

            res.json({ "error": "Invalid User Id" });
            return;

        }

        const secret = process.env.TOKEN_SECRET + user.id;

        try {

            const payload = jwt.verify(
                token,
                secret
            );

            if (payload === true) {

                user.verified = true;
                const verifiedUser = new User(user);

                const saveVerifiedUser = await verifiedUser.save();


                res.json(saveVerifiedUser);

            } else {

                res.status(403).json({ "error": "invalid payload" });

            }

        } catch (error) {

            console.error(error);

            // eslint-disable-next-line no-magic-numbers
            res.status(500).json({

                error: error.message

            });

        }

    }


};


module.exports = userController;
