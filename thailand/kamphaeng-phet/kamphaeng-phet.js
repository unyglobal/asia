// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kamphaeng-phet","repository":"asia","path":"thailand/kamphaeng-phet","depth":2,"parent":"thailand","children":["khanu-woralaksaburi"]});
export const childModules = Object.freeze({"khanu-woralaksaburi":"./khanu-woralaksaburi/khanu-woralaksaburi.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
