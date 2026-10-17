// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"new-mirpur-city","repository":"asia","path":"pakistan/azad-kashmir/new-mirpur-city","depth":3,"parent":"pakistan/azad-kashmir","children":["muhajir-g-1-sector"]});
export const childModules = Object.freeze({"muhajir-g-1-sector":"./muhajir-g-1-sector/muhajir-g-1-sector.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
