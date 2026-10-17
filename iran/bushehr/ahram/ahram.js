// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ahram","repository":"asia","path":"iran/bushehr/ahram","depth":3,"parent":"iran/bushehr","children":["mahalleh-ye-deh-mian","mahalleh-ye-farhadi"]});
export const childModules = Object.freeze({"mahalleh-ye-deh-mian":"./mahalleh-ye-deh-mian/mahalleh-ye-deh-mian.js","mahalleh-ye-farhadi":"./mahalleh-ye-farhadi/mahalleh-ye-farhadi.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
