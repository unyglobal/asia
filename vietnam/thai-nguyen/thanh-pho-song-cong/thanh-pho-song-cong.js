// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"thanh-pho-song-cong","repository":"asia","path":"vietnam/thai-nguyen/thanh-pho-song-cong","depth":3,"parent":"vietnam/thai-nguyen","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
