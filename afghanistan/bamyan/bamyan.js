// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"bamyan","repository":"asia","path":"afghanistan/bamyan","depth":2,"parent":"afghanistan","children":["bazar-e-yakawlang"]});
export const childModules = Object.freeze({"bazar-e-yakawlang":"./bazar-e-yakawlang/bazar-e-yakawlang.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
