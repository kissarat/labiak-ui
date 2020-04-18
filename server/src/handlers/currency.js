const { db } = require('../db/knex');
const { Success } = require('../services/response');

module.exports = {
  async list(req, res) {
    const currencies = await db.table('Currency').orderBy('currencyId');
    res.json(new Success(currencies));
  }
}
