// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"khoevsgoel-province","repository":"asia","path":"mongolia/khoevsgoel-province","depth":2,"parent":"mongolia","children":["moron"]});
export const childModules = Object.freeze({"moron":"./moron/moron.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
