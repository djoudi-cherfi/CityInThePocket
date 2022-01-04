// Pooling
import pg from 'pg';

const { Pool } = pg;

const DATABASE = {
  localhost: process.env.DATABASE_LOCALHOST,
  heroku: process.env.DATABASE_HEROKU,
};

// check environment mode
const checkEnvironment = () => {
  if (process.env.NODE_ENV === process.env.LOCALHOST) {
    return process.env.LOCALHOST;
  }
  if (process.env.NODE_ENV === process.env.HEROKU) {
    return process.env.HEROKU;
  }
  return undefined;
};

// check ssl mode
const sslEnvironment = () => {
  if (process.env.NODE_ENV === process.env.LOCALHOST) {
    return false;
  }
  if (process.env.NODE_ENV === process.env.HEROKU) {
    return { rejectUnauthorized: false };
  }
  return undefined;
};

// Pool est un équivalent de Client pour la connexion a la DB.
const database = new Pool({
  connectionString: DATABASE[checkEnvironment()],

  ssl: sslEnvironment(),
});

console.log('Database is running on', checkEnvironment());

export default database;
