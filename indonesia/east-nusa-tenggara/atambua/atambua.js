// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"atambua","repository":"asia","path":"indonesia/east-nusa-tenggara/atambua","depth":3,"parent":"indonesia/east-nusa-tenggara","children":["merdeka","sukabiren","tanahmerah","tatakiren"]});
export const childModules = Object.freeze({"merdeka":"./merdeka/merdeka.js","sukabiren":"./sukabiren/sukabiren.js","tanahmerah":"./tanahmerah/tanahmerah.js","tatakiren":"./tatakiren/tatakiren.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
