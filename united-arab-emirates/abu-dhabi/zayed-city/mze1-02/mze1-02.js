// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"mze1-02","repository":"asia","path":"united-arab-emirates/abu-dhabi/zayed-city/mze1-02","depth":4,"parent":"united-arab-emirates/abu-dhabi/zayed-city","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
