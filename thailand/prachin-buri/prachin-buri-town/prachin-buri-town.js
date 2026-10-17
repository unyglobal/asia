// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"prachin-buri-town","repository":"asia","path":"thailand/prachin-buri/prachin-buri-town","depth":3,"parent":"thailand/prachin-buri","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
