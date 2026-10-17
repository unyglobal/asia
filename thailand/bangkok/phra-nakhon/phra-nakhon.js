// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"phra-nakhon","repository":"asia","path":"thailand/bangkok/phra-nakhon","depth":3,"parent":"thailand/bangkok","children":["khao-san"]});
export const childModules = Object.freeze({"khao-san":"./khao-san/khao-san.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
