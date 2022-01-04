import jwt from 'jsonwebtoken';
import tokenService from '../services/configToken';
import User from '../models/user';

const { verify } = jwt;

const authMW = {
  auth: async (req, res, next) => {
    const { cookies, headers } = req;

    // On vérifie que le refresh-token est présent dans les cookies de la requête
    if (!cookies['refresh-token']) {
      return res.status(401).json({ message: 'Refresh token manquant dans le cookie' });
    }

    // On vérifie que l'access-token est présent dans l'en-tête de la requête
    const headerToken = headers.authorization;

    const accessToken = headerToken && headerToken.split(' ')[1];

    if (!accessToken || accessToken == null) {
      return res.status(401).json({ message: 'Access token manquant dans le headers' });
    }

    const { algorithm } = tokenService.config;

    // On vérifie et décode le JWT à l'aide du secret
    // et de l'algorithme utilisé pour le générer
    verify(
      accessToken,
      process.env.ACCESS_TOKEN_SECRET,
      { algorithm: algorithm },
      async (error, response) => {
        if (error) {
          return res.status(401).json({ error: error.message });
        }
        // On vérifie que l'utilisateur existe bien dans notre base de données
        const userFound = await User.findOne(response.userId);

        if (!userFound) {
          return res.status(401).json({ message: `L'utilisateur id : ${userFound} n'existe pas` });
        }

        // On passe l'utilisateur dans notre requête pour les prochains middlewares
        req.user = userFound;

        // On appelle le prochain middleware
        return next();
      },
    );
  },
};

export default authMW;
