// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"higashihoncho","repository":"asia","path":"japan/yamagata/tendo/higashihoncho","depth":4,"parent":"japan/yamagata/tendo","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
