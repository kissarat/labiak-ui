const { db } = require('../db/knex');
const { Success } = require('../services/response');

module.exports = {
  async list(req, res) {
    const offers = await db.table('Offer').orderBy('offerId');
    res.json(new Success(offers));
  },
};
