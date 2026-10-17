// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"farrashband","repository":"asia","path":"iran/fars/farrashband","depth":3,"parent":"iran/fars","children":["deh-now-ye-farrashband"]});
export const childModules = Object.freeze({"deh-now-ye-farrashband":"./deh-now-ye-farrashband/deh-now-ye-farrashband.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
