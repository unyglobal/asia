// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kadiri","repository":"asia","path":"india/andhra-pradesh/kadiri","depth":3,"parent":"india/andhra-pradesh","children":["gangireddipalle"]});
export const childModules = Object.freeze({"gangireddipalle":"./gangireddipalle/gangireddipalle.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
