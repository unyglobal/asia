// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kota-kuala-muda","repository":"asia","path":"malaysia/kedah/kota-kuala-muda","depth":3,"parent":"malaysia/kedah","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
