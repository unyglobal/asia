// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"indang","repository":"asia","path":"philippines/calabarzon/indang","depth":3,"parent":"philippines/calabarzon","children":["highland-subdivision"]});
export const childModules = Object.freeze({"highland-subdivision":"./highland-subdivision/highland-subdivision.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
