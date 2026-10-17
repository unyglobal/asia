// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"puthia","repository":"asia","path":"bangladesh/rajshahi-division/puthia","depth":3,"parent":"bangladesh/rajshahi-division","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
