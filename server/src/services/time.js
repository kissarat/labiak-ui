function timeout(duration) {
  return new Promise(function(resolve) {
    setTimeout(resolve, duration);
  });
}

const timestamps = (names = ['at']) => source => {
  const target = { ...source };
  for(const name of names) {
    target[name] = new Date(source[name]);
  }
  return target;
}

module.exports = { timeout, timestamps }
