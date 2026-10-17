// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"shekhupura","repository":"asia","path":"pakistan/punjab/shekhupura","depth":3,"parent":"pakistan/punjab","children":["thatta-baluchan"]});
export const childModules = Object.freeze({"thatta-baluchan":"./thatta-baluchan/thatta-baluchan.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
