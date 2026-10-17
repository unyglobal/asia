// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ch-osal-li","repository":"asia","path":"north-korea/south-pyongan/ch-osal-li","depth":3,"parent":"north-korea/south-pyongan","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
