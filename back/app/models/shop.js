import db from '../database';

/**
 * A entity representing a shop of the marketplace
 * @typedef Shop
 * @property {number} id
 * @property {string} compagny_name
 * @property {number} siret
 * @property {string} description
 * @property {number} phone_number
 * @property {string} address
 * @property {string} city
 * @property {string} email
 * @property {number} user_id
 * @property {number} marketplace_id
 */

/**
 * A model representing a shop of the marketplace
 * @class
 */

class Shop {
  /**
   * The Shop constructor
   * @param {Object} data
   */

  constructor(data = {}) {
    Object.keys(data).forEach((prop) => {
      this[prop] = data[prop];
    });
  }

  /**
   * Fetches every shop in the database
   * @returns {Array<Shop>}
   * @async
   * @static
   */

  static async findAll() {
    const { rows } = await db.query(
      'SELECT shop.*, shop_has_img.img,  category.label FROM shop JOIN shop_has_img ON shop.id = shop_has_img.shop_id JOIN shop_has_category ON shop.id = shop_has_category.shop_id JOIN category ON category.id = shop_has_category.category_id;',
    );

    return rows.map((row) => new Shop(row));
  }

  static async findAllByMarketPlaceId(marketplace_id) {
    const { rows } = await db.query(
      'SELECT shop.*, shop_has_img.img,  category.label FROM shop JOIN shop_has_img ON shop.id = shop_has_img.shop_id JOIN shop_has_category ON shop.id = shop_has_category.shop_id JOIN category ON category.id = shop_has_category.category_id WHERE shop.marketplace_id = $1',
      [marketplace_id],
    );

    return rows.map((row) => new Shop(row));
  }

  /**
   * Fetches a single shop from the database
   * @param {number} id
   * @returns {Category|null} null if no category in the database has is id
   * @async
   * @static
   */

  static async findOne(id) {
    const { rows } = await db.query(
      'SELECT shop.*, shop_has_img.img, category.label FROM shop JOIN shop_has_img ON shop.id = shop_has_img.shop_id JOIN shop_has_category ON shop.id = shop_has_category.shop_id JOIN category ON category.id = shop_has_category.category_id WHERE shop.id = $1;',
      [id],
    );

    if (rows[0]) {
      return new Shop(rows[0]);
    }
    return null;
  }

  static async findOneByUser(id) {
    const { rows } = await db.query(
      'SELECT shop.*, shop_has_img.img, category.label FROM shop JOIN shop_has_img ON shop.id = shop_has_img.shop_id JOIN shop_has_category ON shop.id = shop_has_category.shop_id JOIN category ON category.id = shop_has_category.category_id WHERE shop.user_id = $1;',
      [id],
    );

    if (rows[0]) {
      return new Shop(rows[0]);
    }
    return null;
  }

  static async findAllShopFromMarketPlace(marketplaceId) {
    const { rows } = await db.query(
      'SELECT shop.*, shop_has_img.img, category.label FROM shop JOIN shop_has_category ON shop.id = shop_has_category.shop_id JOIN category ON category.id = shop_has_category.category_id JOIN shop_has_img ON shop.id = shop_has_img.shop_id  WHERE shop.marketplace_id = $1;',
      [marketplaceId],
    );
    return rows.map((row) => new Shop(row));
  }

  static async findLastShopsAddToMarketplace(nbShop, marketplaceId) {
    const { rows } = await db.query(
      'SELECT shop.*, shop_has_img.img, category.label FROM shop JOIN shop_has_img ON shop.id = shop_has_img.shop_id JOIN shop_has_category ON shop.id = shop_has_category.shop_id JOIN category ON category.id = shop_has_category.category_id WHERE shop.marketplace_id = $2 ORDER BY shop.id DESC LIMIT $1;',
      [nbShop, marketplaceId],
    );

    return rows.map((row) => new Shop(row));
  }

  static async findShopsOfCategoryOfMarketplace(categoryId, marketplaceId) {
    const { rows } = await db.query(
      'SELECT shop.*, shop_has_img.img, category.label FROM shop JOIN shop_has_category ON shop.id = shop_has_category.shop_id JOIN category ON category.id = shop_has_category.category_id JOIN shop_has_img ON shop.id = shop_has_img.shop_id WHERE category.id = $1 and shop.marketplace_id = $2;',
      [categoryId, marketplaceId],
    );

    return rows.map((row) => new Shop(row));
  }

  async save() {
    // si id, UPDATE, sinon, INSERT

    if (this.id) {
      // UPDATE
      try {
        const { rows } = await db.query(
          'UPDATE shop SET company_name = $1, siret = $2, description = $3, phone_number = $4, address = $5, city = $6, postal_code = $7, email = $8, user_id = $9, marketplace_id = $10, coordinates = $11 WHERE id = $12',
          [
            this.company_name,
            this.siret,
            this.description,
            this.phone_number,
            this.address,
            this.city,
            this.postal_code,
            this.email,
            this.user_id,
            this.marketplace_id,
            this.coordinates,
            this.id,
          ],
        );
        return rows;
      }
      catch (err) {
        // Lance une erreur sql précise
        console.log(err);
      }

      // INSERT
    }
    else {
      try {
        const { rows } = await db.query(
          'INSERT INTO shop (company_name, siret, description, phone_number, address, city, email, user_id, marketplace_id, postal_code, coordinates) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) RETURNING id;',
          [
            this.company_name,
            this.siret,
            this.description,
            this.phone_number,
            this.address,
            this.city,
            this.email,
            this.user_id,
            this.marketplace_id,
            this.postal_code,
            this.coordinates,
          ],
        );

        this.id = rows[0].id;

        await db.query(
          'UPDATE "user" SET has_shop = $2 WHERE id = $1;',
          [
            this.user_id,
            true,
          ],
        );

        await db.query(
          'INSERT INTO shop_has_category (shop_id, category_id) VALUES ($1, $2);',
          [
            this.id,
            this.category_id,
          ],
        );

        await db.query(
          'INSERT INTO shop_has_img (img, shop_id) VALUES ($1, $2);',
          [
            null,
            this.id,
          ],
        );

        return this.id;
      }
      catch (err) {
        // Lance une erreur sql précise
        console.log(err);
      }
    }
    return null;
  }

  // Delete the shop
  async delete() {
    if (this.id) {
      await db.query(
        'DELETE FROM "shop" WHERE id = $1',
        [this.id],
      );
    }
  }
}

export default Shop;
