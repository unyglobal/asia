// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"badakhshan","repository":"asia","path":"afghanistan/badakhshan","depth":2,"parent":"afghanistan","children":["baharak","fayzabad","jurm"]});
export const childModules = Object.freeze({"baharak":"./baharak/baharak.js","fayzabad":"./fayzabad/fayzabad.js","jurm":"./jurm/jurm.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
