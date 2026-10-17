// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"bardsir","repository":"asia","path":"iran/kerman/bardsir","depth":3,"parent":"iran/kerman","children":["mahalleh-ye-kolkan"]});
export const childModules = Object.freeze({"mahalleh-ye-kolkan":"./mahalleh-ye-kolkan/mahalleh-ye-kolkan.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
