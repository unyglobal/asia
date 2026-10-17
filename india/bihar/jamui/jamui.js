// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"jamui","repository":"asia","path":"india/bihar/jamui","depth":3,"parent":"india/bihar","children":["kalyanpur","mahsauri"]});
export const childModules = Object.freeze({"kalyanpur":"./kalyanpur/kalyanpur.js","mahsauri":"./mahsauri/mahsauri.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
