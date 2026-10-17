// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"malatia-sebastia","repository":"asia","path":"armenia/yerevan/malatia-sebastia","depth":3,"parent":"armenia/yerevan","children":["nor-kokhp"]});
export const childModules = Object.freeze({"nor-kokhp":"./nor-kokhp/nor-kokhp.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
