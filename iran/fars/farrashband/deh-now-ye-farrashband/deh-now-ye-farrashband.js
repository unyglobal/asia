// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"deh-now-ye-farrashband","repository":"asia","path":"iran/fars/farrashband/deh-now-ye-farrashband","depth":4,"parent":"iran/fars/farrashband","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
