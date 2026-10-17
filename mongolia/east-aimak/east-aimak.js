// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"east-aimak","repository":"asia","path":"mongolia/east-aimak","depth":2,"parent":"mongolia","children":["choibalsan"]});
export const childModules = Object.freeze({"choibalsan":"./choibalsan/choibalsan.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
