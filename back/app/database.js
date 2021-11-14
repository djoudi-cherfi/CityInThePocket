// Pooling
const { Pool } = require('pg');

// Pool est un équivalent de Client pour la connexion a la DB.

const database = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

module.exports = database;
