// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"bilecik","repository":"asia","path":"turkiye/bilecik","depth":2,"parent":"turkiye","children":["bozuyuk","osmaneli"]});
export const childModules = Object.freeze({"bozuyuk":"./bozuyuk/bozuyuk.js","osmaneli":"./osmaneli/osmaneli.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
