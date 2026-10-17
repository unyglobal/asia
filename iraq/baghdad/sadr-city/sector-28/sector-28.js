// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"sector-28","repository":"asia","path":"iraq/baghdad/sadr-city/sector-28","depth":4,"parent":"iraq/baghdad/sadr-city","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
