// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"abu-ghurayb","repository":"asia","path":"iraq/baghdad/abu-ghurayb","depth":3,"parent":"iraq/baghdad","children":["hayy-al-bitrah"]});
export const childModules = Object.freeze({"hayy-al-bitrah":"./hayy-al-bitrah/hayy-al-bitrah.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
