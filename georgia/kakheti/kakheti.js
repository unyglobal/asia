// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kakheti","repository":"asia","path":"georgia/kakheti","depth":2,"parent":"georgia","children":["telavi"]});
export const childModules = Object.freeze({"telavi":"./telavi/telavi.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
