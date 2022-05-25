import { config } from 'dotenv';
config();

module.exports = {
  URL_DATABASE: process.env.URL_DATABASE || 'mongodb://localhost/crud-mongo',
  PORT: process.env.PORT || 3000,
}
