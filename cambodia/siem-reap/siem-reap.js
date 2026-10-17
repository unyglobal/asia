// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"siem-reap","repository":"asia","path":"cambodia/siem-reap","depth":2,"parent":"cambodia","children":["yeang"]});
export const childModules = Object.freeze({"yeang":"./yeang/yeang.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
