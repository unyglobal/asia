// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"corum","repository":"asia","path":"turkiye/corum","depth":2,"parent":"turkiye","children":["alaca","iskilip","osmanc-k","sungurlu"]});
export const childModules = Object.freeze({"alaca":"./alaca/alaca.js","iskilip":"./iskilip/iskilip.js","osmanc-k":"./osmanc-k/osmanc-k.js","sungurlu":"./sungurlu/sungurlu.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
