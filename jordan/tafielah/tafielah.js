// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"tafielah","repository":"asia","path":"jordan/tafielah","depth":2,"parent":"jordan","children":["at-tafilah"]});
export const childModules = Object.freeze({"at-tafilah":"./at-tafilah/at-tafilah.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
