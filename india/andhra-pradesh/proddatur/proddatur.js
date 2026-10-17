// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"proddatur","repository":"asia","path":"india/andhra-pradesh/proddatur","depth":3,"parent":"india/andhra-pradesh","children":["togatapalle"]});
export const childModules = Object.freeze({"togatapalle":"./togatapalle/togatapalle.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
