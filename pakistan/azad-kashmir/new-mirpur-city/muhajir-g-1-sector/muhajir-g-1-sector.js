// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"muhajir-g-1-sector","repository":"asia","path":"pakistan/azad-kashmir/new-mirpur-city/muhajir-g-1-sector","depth":4,"parent":"pakistan/azad-kashmir/new-mirpur-city","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
