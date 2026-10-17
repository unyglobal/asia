// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"uvs-province","repository":"asia","path":"mongolia/uvs-province","depth":2,"parent":"mongolia","children":["ulaangom"]});
export const childModules = Object.freeze({"ulaangom":"./ulaangom/ulaangom.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
