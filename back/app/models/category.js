const db = require('../database');

/**
 * A entity representing a category of the marketplace
 * @typedef Category
 * @property {number} id
 * @property {string} label
 */

/**
 * A model representing a category of the marketplace
 * @class
 */

class Category {
  /**
   * The Category constructor
   * @param {Object} data
   */
  constructor(data = {}) {
    Object.keys(data).forEach((prop) => {
      this[prop] = data[prop];
    });
  }

  /**
   * Fetches every category in the database
   * @returns {Array<Category>}
   * @async
   * @static
   */

  static async findAll() {
    const { rows } = await db.query('SELECT * FROM "category" ORDER BY id;');

    return rows.map((row) => new Category(row));
  }

  /**
   * Fetches a single category from the database
   * @param {number} id
   * @returns {Category|null} null if no category in the database has is id
   * @async
   * @static
   */

  static async findOne(id) {
    const { rows } = await db.query(
      'SELECT * FROM "category" WHERE id = $1;',
      [id],
    );

    if (rows[0]) {
      return new Category(rows[0]);
    }
    return null;
  }

  async delete() {
    if (this.id) {
      await db.query(
        'DELETE FROM "category" WHERE id = $1',
        [this.id],
      );
    }
  }
}

module.exports = Category;
