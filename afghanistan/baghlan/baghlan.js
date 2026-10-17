// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"baghlan","repository":"asia","path":"afghanistan/baghlan","depth":2,"parent":"afghanistan","children":["nahrin","pul-e-khumri"]});
export const childModules = Object.freeze({"nahrin":"./nahrin/nahrin.js","pul-e-khumri":"./pul-e-khumri/pul-e-khumri.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
