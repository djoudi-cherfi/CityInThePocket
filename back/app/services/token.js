const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const Token = require('../models/token');

const tokenService = {

  generateToken: async (userId) => {
    const xsrfToken = crypto.randomBytes(64).toString('hex');

    const jwtContent = {
      userId,
      xsrfToken,
    };

    const jwtOptions = {

      audience: 'http://localhost:5000',
      algorithm: 'HS256',
      expiresIn: '900000',
      subject: userId.toString(),
      issuer: 'http://localhost:8080',

    };

    const access_token = jwt.sign(
      jwtContent,
      process.env.TOKEN_SECRET,
      jwtOptions,
    );

    const userRefreshToken = await Token.findOneByUserId(userId);
    const refreshToken = crypto.randomBytes(256).toString('base64');

    // NEED REFACTO
    if (!userRefreshToken) {
      const refreshToBdd2 = await new Token({
        token: refreshToken,
        expire_at: Date.now() + 900000,
        user_id: userId,
      });
      const saveRefreshToBdd2 = await refreshToBdd2.save();
    }
    else {
      const refreshToBdd = await new Token({
        id: userRefreshToken.id,
        token: refreshToken,
        expire_at: Date.now() + 900000,
        user_id: userId,
      });
      const saveRefreshToBdd = await refreshToBdd.save();
    }

    const tokens = {
      access_token,
      refreshToken,
      xsrfToken,
    };

    return tokens;
  },
};

module.exports = tokenService;
