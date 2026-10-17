// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"langarud","repository":"asia","path":"iran/gilan-province/langarud","depth":3,"parent":"iran/gilan-province","children":["chal-kiasar"]});
export const childModules = Object.freeze({"chal-kiasar":"./chal-kiasar/chal-kiasar.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
