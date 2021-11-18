const db = require('../database');

/**
 * A entity representing a product of the shop
 * @typedef Produit
 * @property {number} id
 * @property {string} name
 * @property {string} description
 * @property {number} price
 * @property {number} shop_id
 */

/**
 * A model representing a product of the shop
 * @class
 */

class Product {
  /**
   *
   * @param {Object} data
   */

  constructor(data = {}) {
    Object.keys(data).forEach((prop) => {
      this[prop] = data[prop];
    });
  }

  /**
   * Fetches every product in the database
   * @returns {Array<Product>}
   * @async
   * @static
   */
  static async findAll() {
    const { rows } = await db.query('SELECT * FROM product;');

    return rows.map((row) => new Product(row));
  }

  /**
   * Fetches a single product from the database
   * @param {number} id
   * @returns {Product|null}
   * @async
   * @static
   */

  static async findOne(id) {
    const { rows } = await db.query(
      'SELECT * FROM view_product_shop WHERE id = $1;',
      [id],
    );

    if (rows[0]) {
      return new Product(rows[0]);
    }
    return null;
  }

  static async findLastest(marketplaceId) {
    const { rows } = await db.query(
      'SELECT product.*, shop.marketplace_id FROM product JOIN shop ON product.shop_id = shop.id and shop.marketplace_id = $1 ORDER BY product.id DESC LIMIT 5;',
      [marketplaceId],
    );

    return rows.map((row) => new Product(row));
  }

  async save() {
    // si id, UPDATE, sinon, INSERT
    if (this.id) {
      // UPDATE
      try {
        const { rows } = await db.query(
          'UPDATE "product" SET name = $1, description = $2, price = $3, shop_id = $4 WHERE id = $5',
          [
            this.name,
            this.description,
            this.price,
            this.shop_id,
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
          'INSERT INTO product (name, description, price, shop_id) VALUES ($1, $2, $3, $4) RETURNING id;',
          [
            this.name,
            this.description,
            this.price,
            this.shop_id,
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

  // Delete the product
  async delete() {
    if (this.id) {
      await db.query(
        'DELETE FROM "product" WHERE id = $1',
        [this.id],
      );
    }
  }
}

module.exports = Product;
