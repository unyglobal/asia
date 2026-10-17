// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"van","repository":"asia","path":"turkiye/van","depth":2,"parent":"turkiye","children":["ercis"]});
export const childModules = Object.freeze({"ercis":"./ercis/ercis.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
