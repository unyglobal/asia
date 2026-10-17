// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"mafraq","repository":"asia","path":"jordan/mafraq","depth":2,"parent":"jordan","children":["rukban"]});
export const childModules = Object.freeze({"rukban":"./rukban/rukban.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
