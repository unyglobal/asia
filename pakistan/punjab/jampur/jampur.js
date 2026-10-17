// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"jampur","repository":"asia","path":"pakistan/punjab/jampur","depth":3,"parent":"pakistan/punjab","children":["piran-shahwala"]});
export const childModules = Object.freeze({"piran-shahwala":"./piran-shahwala/piran-shahwala.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
