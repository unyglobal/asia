// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kakegawa","repository":"asia","path":"japan/shizuoka/kakegawa","depth":3,"parent":"japan/shizuoka","children":["kamenoko","kubo","minami"]});
export const childModules = Object.freeze({"kamenoko":"./kamenoko/kamenoko.js","kubo":"./kubo/kubo.js","minami":"./minami/minami.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
