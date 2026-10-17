// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"shahr-e-babak","repository":"asia","path":"iran/kerman/shahr-e-babak","depth":3,"parent":"iran/kerman","children":["mahalleh-ye-deh-musa"]});
export const childModules = Object.freeze({"mahalleh-ye-deh-musa":"./mahalleh-ye-deh-musa/mahalleh-ye-deh-musa.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
