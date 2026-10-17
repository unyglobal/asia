// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"phumi-tnaot","repository":"asia","path":"cambodia/kampong-thom/phumi-tnaot","depth":3,"parent":"cambodia/kampong-thom","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
