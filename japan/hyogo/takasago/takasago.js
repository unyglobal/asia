// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"takasago","repository":"asia","path":"japan/hyogo/takasago","depth":3,"parent":"japan/hyogo","children":["iho","imaichi","midorigaoka"]});
export const childModules = Object.freeze({"iho":"./iho/iho.js","imaichi":"./imaichi/imaichi.js","midorigaoka":"./midorigaoka/midorigaoka.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
