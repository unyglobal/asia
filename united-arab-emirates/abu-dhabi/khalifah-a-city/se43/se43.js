// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"se43","repository":"asia","path":"united-arab-emirates/abu-dhabi/khalifah-a-city/se43","depth":4,"parent":"united-arab-emirates/abu-dhabi/khalifah-a-city","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
