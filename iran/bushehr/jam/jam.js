// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"jam","repository":"asia","path":"iran/bushehr/jam","depth":3,"parent":"iran/bushehr","children":["khvajeh-ahmadi"]});
export const childModules = Object.freeze({"khvajeh-ahmadi":"./khvajeh-ahmadi/khvajeh-ahmadi.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
