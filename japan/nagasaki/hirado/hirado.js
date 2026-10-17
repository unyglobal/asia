// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"hirado","repository":"asia","path":"japan/nagasaki/hirado","depth":3,"parent":"japan/nagasaki","children":["kihikidacho","koyamachi","uonotanacho"]});
export const childModules = Object.freeze({"kihikidacho":"./kihikidacho/kihikidacho.js","koyamachi":"./koyamachi/koyamachi.js","uonotanacho":"./uonotanacho/uonotanacho.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
