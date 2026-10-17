// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"takamatsu","repository":"asia","path":"japan/kagawa/takamatsu","depth":3,"parent":"japan/kagawa","children":["shichibancho"]});
export const childModules = Object.freeze({"shichibancho":"./shichibancho/shichibancho.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
