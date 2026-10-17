// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"darab","repository":"asia","path":"iran/fars/darab","depth":3,"parent":"iran/fars","children":["mahalleh-ye-bagh-banafsh"]});
export const childModules = Object.freeze({"mahalleh-ye-bagh-banafsh":"./mahalleh-ye-bagh-banafsh/mahalleh-ye-bagh-banafsh.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
