const db = require('../database');

class Token {
  constructor(data = {}) {
    Object.keys(data).forEach((prop) => {
      this[prop] = data[prop];
    });
  }

  static async findOneById(id) {
    const { rows } = await db.query(
      'SELECT * FROM refresh_token WHERE id = $1',
      [id],
    );

    if (rows[0]) {
      return new Token(rows[0]);
    }
    return null;
  }

  static async findOneByUserId(userId) {
    const { rows } = await db.query(
      'SELECT * FROM refresh_token WHERE user_id = $1',
      [userId],
    );

    if (rows[0]) {
      return new Token(rows[0]);
    }
    return null;
  }

  async save() {
    // si id, UPDATE, sinon, INSERT
    if (this.user_id) {
      // UPDATE
      try {
        const { rows } = await db.query(
          'UPDATE "refresh_token" SET token = $1, expire_at = $2 WHERE user_id = $3 RETURNING id',
          [
            this.token,
            this.expire_at,
            this.user_id,
          ],
        );

        this.id = rows[0].id;

        return this.token;
      }
      catch (err) {
        // Lance une erreur sql précise
        console.log(err);
      }
    }
    else {
      try {
        const { rows } = await db.query(
          'INSERT INTO refresh_token (token, user_id, expire_at) VALUES ($1, $2, $3) RETURNING id;',
          [
            this.token,
            this.user_id,
            this.expire_at,
          ],
        );

        this.id = rows[0].id;
        return this.id;
      }
      catch (err) {
        // lance une erreur sql précise
        console.log(err);
      }
    }
    return null;
  }
}

module.exports = Token;
