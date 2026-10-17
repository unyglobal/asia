// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"sedeh-lanjan","repository":"asia","path":"iran/isfahan/sedeh-lanjan","depth":3,"parent":"iran/isfahan","children":["shahrak-e-isargaran"]});
export const childModules = Object.freeze({"shahrak-e-isargaran":"./shahrak-e-isargaran/shahrak-e-isargaran.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
