// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"colombo","repository":"asia","path":"sri-lanka/western-province/colombo","depth":3,"parent":"sri-lanka/western-province","children":["fort"]});
export const childModules = Object.freeze({"fort":"./fort/fort.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
