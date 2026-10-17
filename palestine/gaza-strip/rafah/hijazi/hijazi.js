// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"hijazi","repository":"asia","path":"palestine/gaza-strip/rafah/hijazi","depth":4,"parent":"palestine/gaza-strip/rafah","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
