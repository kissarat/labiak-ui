function createUrl({ origin, path }) {
  return `${origin}/${path}`;
}

module.exports = { createUrl };
