// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"tavush","repository":"asia","path":"armenia/tavush","depth":2,"parent":"armenia","children":["dilijan","ijevan"]});
export const childModules = Object.freeze({"dilijan":"./dilijan/dilijan.js","ijevan":"./ijevan/ijevan.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
