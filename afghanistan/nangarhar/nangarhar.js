// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"nangarhar","repository":"asia","path":"afghanistan/nangarhar","depth":2,"parent":"afghanistan","children":["jalalabad","markaz-e-woluswali-ye-achin"]});
export const childModules = Object.freeze({"jalalabad":"./jalalabad/jalalabad.js","markaz-e-woluswali-ye-achin":"./markaz-e-woluswali-ye-achin/markaz-e-woluswali-ye-achin.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
