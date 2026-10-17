// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"xiangkhoang","repository":"asia","path":"laos/xiangkhoang","depth":2,"parent":"laos","children":["muang-phonsavan"]});
export const childModules = Object.freeze({"muang-phonsavan":"./muang-phonsavan/muang-phonsavan.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
