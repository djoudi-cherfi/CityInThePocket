const db = require('../database');
const Shop = require('./shop');

/**
 * A entity representing a marketplace
 * @typedef Marketplace
 * @property {number} id
 * @property {string} city
 * @property {number} postal_code
 * @property {Date} create_date
 */

/**
 * A model representing a marketplace
 */

class Marketplace {
  /**
   * The Marketplace contructor
   * @param {Object} data
   */

  constructor(data = {}) {
    Object.keys(data).forEach((prop) => {
      this[prop] = data[prop];
    });
  }

  /**
   * Fetches every Marketplace in the database
   * @returns {Array<Marketplace>}
   * @async
   * @static
   */

  static async findAll() {
    const { rows } = await db.query('SELECT * FROM marketplace');
    return rows.map((row) => new Marketplace(row));
  }

  /**
   * Fetches a single marketplace from the database
   * @param {number} id
   * @returns {Marketplace|null}
   * @async
   * @static
   */

  static async findOne(id) {
    const { rows } = await db.query(
      'SELECT * FROM marketplace WHERE id = $1',
      [id],
    );

    if (rows[0]) {
      return new Marketplace(rows[0]);
    }
    return null;
  }

  /**
   *
   * @param {number} id - the marketplace id
   * @returns {Array}
   */

  static async findAllShopFromOneMarketPlace(id) {
    const { rows } = await db.query(
      'SELECT shop.*, shop_has_img.img, category.label FROM shop JOIN shop_has_category ON shop.id = shop_has_category.shop_id JOIN category ON category.id = shop_has_category.category_id JOIN shop_has_img ON shop.id = shop_has_img.shop_id  WHERE shop.marketplace_id = $1;',
      [id],
    );
    return rows.map((row) => new Shop(row));
  }

  async save() {
    if (this.id) {
      // UPDATE
      try {
        const { rows } = await db.query(
          'UPDATE "marketplace" SET city = $1, postal_code = $2 WHERE id = $3;',
          [
            this.city,
            this.postal_code,
            this.id,
          ],
        );
        return rows;
      }
      catch (err) {
        // Lance une erreur sql précise
        throw new Error(err.detail);
      }

      // INSERT
    }
    else {
      try {
        const { rows } = await db.query(
          'INSERT INTO "marketplace" (city, postal_code) VALUES ($1, $2) RETURNING id;',
          [
            this.city,
            this.postal_code,
          ],
        );

        this.id = rows[0].id;

        return this.id;
      }
      catch (err) {
        // Lance une erreur sql précise
        throw new Error(err.detail);
      }
    }
  }

  // Delete the marketplace
  async delete() {
    if (this.id) {
      await db.query(
        'DELETE FROM marketplace WHERE id = $1;',
        [this.id],
      );
    }
  }
}

module.exports = Marketplace;
