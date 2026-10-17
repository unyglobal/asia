// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"karaman","repository":"asia","path":"turkiye/karaman","depth":2,"parent":"turkiye","children":["ermenek"]});
export const childModules = Object.freeze({"ermenek":"./ermenek/ermenek.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
