// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"abiko","repository":"asia","path":"japan/chiba/abiko","depth":3,"parent":"japan/chiba","children":["hakusan","honcho","kotobuki","midori"]});
export const childModules = Object.freeze({"hakusan":"./hakusan/hakusan.js","honcho":"./honcho/honcho.js","kotobuki":"./kotobuki/kotobuki.js","midori":"./midori/midori.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
