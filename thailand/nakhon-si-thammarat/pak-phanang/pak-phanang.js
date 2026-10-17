// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"pak-phanang","repository":"asia","path":"thailand/nakhon-si-thammarat/pak-phanang","depth":3,"parent":"thailand/nakhon-si-thammarat","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
