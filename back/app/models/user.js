/* eslint-disable no-magic-numbers */
/* eslint-disable guard-for-in */
"use strict";

const db = require("../database");
const bcrypt = require("bcrypt");

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

    constructor (data = {}) {

        for (const prop in data) {

            this[prop] = data[prop];

        }

    }

    /**
     * Fetches every user in the database
     * @returns {Array<Category>}
     * @async
     * @static
     */
    static async findAll () {

        const {
            rows
        } = await db.query('SELECT * FROM "user";');

        return rows.map((row) => new User(row));

    }

    /**
     * Fetches a single user from the database
     * @param {number} id
     * @returns {User|null} null if no user in the database has is id
     * @async
     * @static
     */

    static async findOne (id) {

        const {
            rows
        } = await db.query(
            'SELECT * FROM "user" WHERE id = $1;',
            [id]
        );

        if (rows[0]) {

            return new User(rows[0]);

        } else {

            return null;

        }

    }

    static async findOneEmail (email) {

        const {
            rows
        } = await db.query(
            'SELECT * FROM "user" WHERE email = $1;',
            [email]
        );

        if (rows[0]) {

            return new User(rows[0]);

        } else {

            return null;

        }

    }

    async save () {

        // Si id, UPDATE, sinon, INSERT
        if (this.id) {

            // UPDATE
            try {

                const {rows} = await db.query(
                    'UPDATE "user" SET firstName = $1, lastName= $2, email = $3, avatar = $4, phone_number = $5, address = $6, city = $7, postal_code = $8, create_date = $9, password = $10, verified = $11 WHERE id = $12 RETURNING id;',
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
                        this.id
                    ]
                );

                return rows;

            } catch (err) {

                // Lance une erreur sql précise
                console.log(err.detail);

            }

            // INSERT

        } else {

            try {

                const encryptPassword = bcrypt.hashSync(
                    this.password,
                    10
                );

                const {
                    rows
                } = await db.query(
                    'INSERT INTO "user" (firstName, lastName, email, phone_number, address, city, postal_code, password) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING id;',
                    [
                        this.firstName,
                        this.lastName,
                        this.email,
                        this.phone_number,
                        this.address,
                        this.city,
                        this.postal_code,
                        encryptPassword

                    ]
                );

                this.id = rows[0].id;

                return this.id;

            } catch (err) {

                // Lance une erreur sql précise
                console.log(err);

            }

        }

    }

    // Delete the user
    async delete () {

        if (this.id) {

            await db.query(
                'DELETE FROM "user" WHERE id = $1',
                [this.id]
            );

        }

    }

}

module.exports = User;
