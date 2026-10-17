// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"alappuzha","repository":"asia","path":"india/kerala/alappuzha","depth":3,"parent":"india/kerala","children":["alasseri"]});
export const childModules = Object.freeze({"alasseri":"./alasseri/alasseri.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
