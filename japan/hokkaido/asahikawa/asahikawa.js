// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"asahikawa","repository":"asia","path":"japan/hokkaido/asahikawa","depth":3,"parent":"japan/hokkaido","children":["gojodori","ichijodori","yojodori"]});
export const childModules = Object.freeze({"gojodori":"./gojodori/gojodori.js","ichijodori":"./ichijodori/ichijodori.js","yojodori":"./yojodori/yojodori.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
