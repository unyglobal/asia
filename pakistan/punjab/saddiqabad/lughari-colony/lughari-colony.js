// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"lughari-colony","repository":"asia","path":"pakistan/punjab/saddiqabad/lughari-colony","depth":4,"parent":"pakistan/punjab/saddiqabad","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
