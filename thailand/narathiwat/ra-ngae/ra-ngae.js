// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ra-ngae","repository":"asia","path":"thailand/narathiwat/ra-ngae","depth":3,"parent":"thailand/narathiwat","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
