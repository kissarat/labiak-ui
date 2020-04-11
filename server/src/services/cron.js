const { db, knex } = require('../db/knex');

async function main() {
  const requestUrls = await db.table('UrlString');
  
  await knex.destroy();
}

main().catch(err => {
  console.error(err);
});
