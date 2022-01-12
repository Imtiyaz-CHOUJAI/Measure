require("dotenv").config();

module.exports = {
  development: {
    client: process.env.DB_CLIENT,
    version: process.env.DB_VERSION,
    connection: {
      host: process.env.DB_HOST,
      port: 3306,
      user: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
    },
    migrations: {
      tableName: "migrations",
      directory: "./api/database/migrations",
    },
    seeds: {
      directory: "./api/database/seeds",
    },
  },
};
