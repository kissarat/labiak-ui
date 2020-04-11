const knex = require('knex');

const db = Knex({
  client: "pg",
  connection: {
    host: process.env.DB_HOST || "127.0.0.1",
    user: process.env.DB_USER || "labiak",
    password: process.env.DB_PASSWORD || "labiak",
    database: process.env.DB_DATABASE || "labiak"
  },
});

module.exports = { db, knex };
