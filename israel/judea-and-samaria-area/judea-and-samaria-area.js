// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"judea-and-samaria-area","repository":"asia","path":"israel/judea-and-samaria-area","depth":2,"parent":"israel","children":["ariel"]});
export const childModules = Object.freeze({"ariel":"./ariel/ariel.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
