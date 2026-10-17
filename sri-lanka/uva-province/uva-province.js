// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"uva-province","repository":"asia","path":"sri-lanka/uva-province","depth":2,"parent":"sri-lanka","children":["badulla","kataragama"]});
export const childModules = Object.freeze({"badulla":"./badulla/badulla.js","kataragama":"./kataragama/kataragama.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
