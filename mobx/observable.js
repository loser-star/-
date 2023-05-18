const deepProxy = (target, handler) => {
  if (typeof target !== "object") {
    return target
  }
  for (const key in target) {
    if (typeof target[key] === "object") {
      target[key] = deepProxy(target[key], handler)
    }
  }
  return new Proxy(target, handler)
};

const createObservable = (target) => {
  const handler = () => {
    const reaction = new Reaction()
    return {
      
      get(target, key) {
        reaction.collect(target, key);
        return Reflect.get(target, key);
      },
      set(target, key, value) {
        if(key === 'length') return true
        let res = Reflect.set(target, key, value);
        reaction.run()
        console.log("set", key, value);
        return res
      },
    };
  };

  return deepProxy(target, handler());
};

const observable = (target,key,descritor) => {
  if(typeof key === 'string'){
    let v = descritor.initializer()
    let reaction = new Reaction()
    return {
      enumerable:true,
      configurable:true,
      get(){
        reaction.collect()
        return v
      },
      set(value){
        v = value
        reaction.run()
      }
    }
  }

  return createObservable(target);
};

// module.exports = { observable };
