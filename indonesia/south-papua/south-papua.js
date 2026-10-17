// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"south-papua","repository":"asia","path":"indonesia/south-papua","depth":2,"parent":"indonesia","children":["agats","merauke"]});
export const childModules = Object.freeze({"agats":"./agats/agats.js","merauke":"./merauke/merauke.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
