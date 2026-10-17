// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"hashtpar","repository":"asia","path":"iran/gilan-province/hashtpar","depth":3,"parent":"iran/gilan-province","children":["qasameh-kari"]});
export const childModules = Object.freeze({"qasameh-kari":"./qasameh-kari/qasameh-kari.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
