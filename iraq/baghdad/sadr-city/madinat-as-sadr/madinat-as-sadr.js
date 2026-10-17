// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"madinat-as-sadr","repository":"asia","path":"iraq/baghdad/sadr-city/madinat-as-sadr","depth":4,"parent":"iraq/baghdad/sadr-city","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
