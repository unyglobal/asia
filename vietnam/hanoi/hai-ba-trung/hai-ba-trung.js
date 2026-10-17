// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"hai-ba-trung","repository":"asia","path":"vietnam/hanoi/hai-ba-trung","depth":3,"parent":"vietnam/hanoi","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
