// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"okino","repository":"asia","path":"japan/kumamoto/okino","depth":3,"parent":"japan/kumamoto","children":["suginamidai"]});
export const childModules = Object.freeze({"suginamidai":"./suginamidai/suginamidai.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
