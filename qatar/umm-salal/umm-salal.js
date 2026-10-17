// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"umm-salal","repository":"asia","path":"qatar/umm-salal","depth":2,"parent":"qatar","children":["umm-salal-muhammad"]});
export const childModules = Object.freeze({"umm-salal-muhammad":"./umm-salal-muhammad/umm-salal-muhammad.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
