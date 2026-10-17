// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"shiroishi","repository":"asia","path":"japan/miyagi/shiroishi","depth":3,"parent":"japan/miyagi","children":["higashicho","minamimachi"]});
export const childModules = Object.freeze({"higashicho":"./higashicho/higashicho.js","minamimachi":"./minamimachi/minamimachi.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
