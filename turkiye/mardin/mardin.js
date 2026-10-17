// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"mardin","repository":"asia","path":"turkiye/mardin","depth":2,"parent":"turkiye","children":["dargecit","k-z-ltepe","midyat","nusaybin","yesilli"]});
export const childModules = Object.freeze({"dargecit":"./dargecit/dargecit.js","k-z-ltepe":"./k-z-ltepe/k-z-ltepe.js","midyat":"./midyat/midyat.js","nusaybin":"./nusaybin/nusaybin.js","yesilli":"./yesilli/yesilli.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
