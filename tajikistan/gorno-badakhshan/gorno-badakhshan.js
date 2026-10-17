// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"gorno-badakhshan","repository":"asia","path":"tajikistan/gorno-badakhshan","depth":2,"parent":"tajikistan","children":["ishqoshim","khorugh"]});
export const childModules = Object.freeze({"ishqoshim":"./ishqoshim/ishqoshim.js","khorugh":"./khorugh/khorugh.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
