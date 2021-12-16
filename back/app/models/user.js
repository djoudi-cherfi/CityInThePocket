const bcrypt = require('bcrypt');
const db = require('../database');

/**
 * A entity representing a user of the marketplace
 * @typedef User
 * @property {number} id
 * @property {string} firstName
 * @property {string} lastname
 * @property {string} email
 * @property {string} avatar
 * @property {number} phone_number
 * @property {string} city
 * @property {string} email
 * @property {number} user_id
 * @property {number} marketplace_id
 */

/**
 * A model representing a user of the marketplace
 * @class
 */
class User {
  /**
   * The User constructor
   * @param {Object} data
   */

  constructor(data = {}) {
    Object.keys(data).forEach((prop) => {
      this[prop] = data[prop];
    });
  }

  /**
   * Fetches every user in the database
   * @returns {Array<Category>}
   * @async
   * @static
   */
  static async findAll() {
    const { rows } = await db.query(
      'SELECT * FROM "user";',
    );

    return rows.map((row) => new User(row));
  }

  /**
   * Fetches a single user from the database
   * @param {number} id
   * @returns {User|null} null if no user in the database has is id
   * @async
   * @static
   */

  static async findOne(id) {
    const { rows } = await db.query(
      'SELECT * FROM "user" WHERE id = $1;',
      [id],
    );

    if (rows[0]) {
      return new User(rows[0]);
    }
    return null;
  }

  static async findOneEmail(email) {
    const { rows } = await db.query(
      'SELECT * FROM "user" WHERE email = $1;',
      [email],
    );

    if (rows[0]) {
      return new User(rows[0]);
    }
    return null;
  }

  async save() {
    // Si id, UPDATE, sinon, INSERT
    if (this.id) {
      // UPDATE
      try {
        const { rows } = await db.query(
          'UPDATE "user" SET firstName = $1, lastName= $2, email = $3, avatar = $4, phone_number = $5, address = $6, city = $7, postal_code = $8, create_date = $9, password = $10, verified = $11, has_shop = $12, policy_agree = $13 WHERE id = $14 RETURNING id;',
          [
            this.firstname,
            this.lastname,
            this.email,
            this.avatar,
            this.phone_number,
            this.address,
            this.city,
            this.postal_code,
            this.create_date,
            this.password,
            this.verified,
            this.has_shop,
            this.policy_agree,
            this.id,
          ],
        );

        this.id = rows[0].id;

        return this.id;
      }
      catch (err) {
        // Lance une erreur sql précise
        console.log(err.detail);
      }

      // INSERT
    }
    else {
      try {
        const encryptPassword = bcrypt.hashSync(
          this.password,
          10,
        );

        const { rows } = await db.query(
          'INSERT INTO "user" (firstName, lastName, address, city, postal_code, email, phone_number, policy_agree, password) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING id;',
          [
            this.firstName,
            this.lastName,
            this.address,
            this.city,
            this.postal_code,
            this.email,
            this.phone_number,
            this.policy_agree,
            encryptPassword,
          ],
        );

        this.id = rows[0].id;

        return this.id;
      }
      catch (err) {
        // Lance une erreur sql précise
        console.log(err);
      }
    }
    return null;
  }

  // Delete the user
  async delete() {
    if (this.id) {
      await db.query(
        'DELETE FROM "user" WHERE id = $1',
        [this.id],
      );
    }
  }
}

module.exports = User;
