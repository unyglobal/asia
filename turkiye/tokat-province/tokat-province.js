// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"tokat-province","repository":"asia","path":"turkiye/tokat-province","depth":2,"parent":"turkiye","children":["erbaa","niksar","tokat","turhal","zile"]});
export const childModules = Object.freeze({"erbaa":"./erbaa/erbaa.js","niksar":"./niksar/niksar.js","tokat":"./tokat/tokat.js","turhal":"./turhal/turhal.js","zile":"./zile/zile.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
