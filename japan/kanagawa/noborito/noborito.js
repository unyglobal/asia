// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"noborito","repository":"asia","path":"japan/kanagawa/noborito","depth":3,"parent":"japan/kanagawa","children":["masugata"]});
export const childModules = Object.freeze({"masugata":"./masugata/masugata.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
