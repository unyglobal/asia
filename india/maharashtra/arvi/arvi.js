// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"arvi","repository":"asia","path":"india/maharashtra/arvi","depth":3,"parent":"india/maharashtra","children":["tahsil"]});
export const childModules = Object.freeze({"tahsil":"./tahsil/tahsil.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
