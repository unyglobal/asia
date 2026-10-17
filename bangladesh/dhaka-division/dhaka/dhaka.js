// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"dhaka","repository":"asia","path":"bangladesh/dhaka-division/dhaka","depth":3,"parent":"bangladesh/dhaka-division","children":["banglabazar"]});
export const childModules = Object.freeze({"banglabazar":"./banglabazar/banglabazar.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
