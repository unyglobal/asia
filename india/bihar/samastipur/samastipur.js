// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"samastipur","repository":"asia","path":"india/bihar/samastipur","depth":3,"parent":"india/bihar","children":["bangra","kashipur"]});
export const childModules = Object.freeze({"bangra":"./bangra/bangra.js","kashipur":"./kashipur/kashipur.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
