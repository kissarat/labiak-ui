function createResolver(Services, source = {}) {
  const proxy = new Proxy(source, {
    get(target, name) {
      if (!(name in target)) {
        if (name in Services) {
          const Service = Services[name];
          target[name] = new Service(proxy);
        } else {
          throw new Error(`Service "${name}" not found`);
        }
      }
      return target[name];
    }
  });
  return proxy;
}

module.exports = { createResolver };
