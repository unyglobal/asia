// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"phumi-ampil-leu","repository":"asia","path":"cambodia/kampong-cham/phumi-ampil-leu","depth":3,"parent":"cambodia/kampong-cham","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
