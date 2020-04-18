const { db } = require('../db/knex');
const { timestamps } = require('./time');
const Axios = require('axios');

const bankTitle = 'ПриватБанк';

async function main() {
  const { data } = await Axios.get(
    'http://resources.finance.ua/ru/public/currency-cash.json'
  );
  const currencies = (await db.table('Currency')).map(timestamps());
  let lastUpdatedAt = 0;
  for (const currency of currencies) {
    lastUpdatedAt = Math.max(lastUpdatedAt, currency.at.getTime());
  }
  const newCurrencies = [];
  const updateCurrencyPromises = [];
  const at = new Date(data.date);
  if (at.getTime() > lastUpdatedAt) {
    for(const org of data.organizations) {
      if (org.title === bankTitle) {
        for(const currencyId in org.currencies) {
          const { ask, bid } = org.currencies[currencyId];
          const currency = currencies.find(item => item.currencyId === currencyId);
          if (currency) {
            if (!(currency.ask === ask && currency.bid === bid)) {
              updateCurrencyPromises.push(
                db.table('Currency')
                    .where({ currencyId })
                    .update({ ask, bid, at })
                    .then(() => db.table('CurrencyHistory').insert(currency))
              );
            }
          } else {
            newCurrencies.push({ currencyId, ask, bid, at });
          }
        }
        break;
      }
    }
  }
  await Promise.all(updateCurrencyPromises);
  if (newCurrencies.length > 0) {
    await db.table('Currency').insert(newCurrencies);
  }
  await db.destroy();
}

main().catch((err) => {
  console.error(err);
});
