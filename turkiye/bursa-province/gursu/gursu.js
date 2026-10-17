// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"gursu","repository":"asia","path":"turkiye/bursa-province/gursu","depth":3,"parent":"turkiye/bursa-province","children":["istiklal","zafer"]});
export const childModules = Object.freeze({"istiklal":"./istiklal/istiklal.js","zafer":"./zafer/zafer.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
