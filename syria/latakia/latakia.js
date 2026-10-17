// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"latakia","repository":"asia","path":"syria/latakia","depth":2,"parent":"syria","children":["burj-islam","jablah"]});
export const childModules = Object.freeze({"burj-islam":"./burj-islam/burj-islam.js","jablah":"./jablah/jablah.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
