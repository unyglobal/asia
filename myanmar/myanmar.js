// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"myanmar","repository":"asia","path":"myanmar","depth":1,"parent":"","children":["ayeyarwady","bago-region","chin-state","kachin-state","kayah-state","kayin-state","kyauktan","kyauktan-a","magway","mandalay-region","mon","nay-pyi-taw","rakhine","sagaing-region","shan-state","tanintharyi-region","yangon"]});
export const childModules = Object.freeze({"ayeyarwady":"./ayeyarwady/ayeyarwady.js","bago-region":"./bago-region/bago-region.js","chin-state":"./chin-state/chin-state.js","kachin-state":"./kachin-state/kachin-state.js","kayah-state":"./kayah-state/kayah-state.js","kayin-state":"./kayin-state/kayin-state.js","kyauktan":"./kyauktan/kyauktan.js","kyauktan-a":"./kyauktan-a/kyauktan-a.js","magway":"./magway/magway.js","mandalay-region":"./mandalay-region/mandalay-region.js","mon":"./mon/mon.js","nay-pyi-taw":"./nay-pyi-taw/nay-pyi-taw.js","rakhine":"./rakhine/rakhine.js","sagaing-region":"./sagaing-region/sagaing-region.js","shan-state":"./shan-state/shan-state.js","tanintharyi-region":"./tanintharyi-region/tanintharyi-region.js","yangon":"./yangon/yangon.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
