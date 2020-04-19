const { Service } = require('../service');

class OfferService extends Service {
  list(params) {
    return this.table('Offer', (q) => q.where(params).orderBy('offerId'));
  }

  create(params) {
    return this.table('Offer', (q) =>
      q
        .insert({
          ...params,
          currencyId: 'UAH',
        })
        .returning('*')
    );
  }

  update(offerId, params) {
    params.updatedAt = new Date();
    return this.table('Offer', (q) =>
      q.where({ offerId }).update(params).returning('*')
    );
  }

  delete(offerId) {
    return this.table('Offer', (q) =>
      q.where({ offerId }).del().returning('*')
    );
  }
}

module.exports = { OfferService };
