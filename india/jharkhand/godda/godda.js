// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"godda","repository":"asia","path":"india/jharkhand/godda","depth":3,"parent":"india/jharkhand","children":["asanbani","gangta"]});
export const childModules = Object.freeze({"asanbani":"./asanbani/asanbani.js","gangta":"./gangta/gangta.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
