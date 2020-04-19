const { createResolver } = require('./resolver');
const { OfferService } = require('./offer');

const Services = {
  offer: OfferService
};

function createServiceResolver() {
  return createResolver(Services, { trx: null });
}

module.exports = { createServiceResolver };
