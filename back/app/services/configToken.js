import jwt from 'jsonwebtoken';

import Token from '../models/token';

const { sign } = jwt;

const tokenService = {
  config: {
    audience: 'http://localhost:5000',
    algorithm: 'HS256',
    issuer: 'http://localhost:8080',
  },

  // Access_Token expires in
  accessTokenExpires: '1m', // time minute

  // Refresh_token expires in
  refreshTokenExpires: 1000 * 60 * 60 * 24 * 7, // time week

  generateToken: async (userId) => {
    const configAccesRefresh = (expiresIn) => ({
      audience: tokenService.config.audience,
      algorithm: tokenService.config.algorithm,
      expiresIn: expiresIn,
      subject: userId,
      issuer: tokenService.config.issuer,
    });

    // On créer le JWT avec le token CSRF dans le payload
    const access_token = sign(
      { userId: userId },
      process.env.ACCESS_TOKEN_SECRET,
      configAccesRefresh(tokenService.accessTokenExpires),
    );

    // On créer le refresh token et on le stocke en BDD
    const refresh_token = sign(
      { userId: userId },
      process.env.REFRESH_TOKEN_SECRET,
      configAccesRefresh(tokenService.refreshTokenExpires),
    );

    const refreshTokenToBdd = new Token({
      token: refresh_token,
      expire_at: new Date(Date.now() + (tokenService.refreshTokenExpires)),
      user_id: userId,
    });

    await refreshTokenToBdd.save();

    const tokens = {
      access_token,
      refresh_token,
    };

    return tokens;
  },
};

export default tokenService;
