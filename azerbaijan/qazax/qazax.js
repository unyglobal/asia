// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"qazax","repository":"asia","path":"azerbaijan/qazax","depth":2,"parent":"azerbaijan","children":["gazakh"]});
export const childModules = Object.freeze({"gazakh":"./gazakh/gazakh.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
