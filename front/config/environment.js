import { DefinePlugin } from 'webpack';

import '../loadEnv';

// Development modes with its environment variables
const NODE_ENV = {
  development: JSON.stringify(process.env.DEV),
  production: JSON.stringify(process.env.PROD),
  heroku: JSON.stringify(process.env.HEROKU),
};

const API_URL = {
  development: JSON.stringify(process.env.URL_BACK),
  production: JSON.stringify(process.env.URL_BACK),
  heroku: JSON.stringify(process.env.URL_HEROKU),
};

const URL_PUBLIC = JSON.stringify(process.env.URL_PUBLIC);

// check environment mode
const checkEnvironment = () => {
  if (process.env.NODE_ENV === process.env.DEV) {
    return process.env.DEV;
  }
  if (process.env.NODE_ENV === process.env.PROD) {
    return process.env.PROD;
  }
  return process.env.HEROKU;
};

const environment = {
  plugins: [
    // Environment variable
    new DefinePlugin({
      API_URL: API_URL[checkEnvironment()],
      NODE_ENV: NODE_ENV[checkEnvironment()],
      URL_PUBLIC: URL_PUBLIC,
    }),
  ],
};

export default environment;
