// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kunduz","repository":"asia","path":"afghanistan/kunduz","depth":2,"parent":"afghanistan","children":["khanabad","qarawul"]});
export const childModules = Object.freeze({"khanabad":"./khanabad/khanabad.js","qarawul":"./qarawul/qarawul.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
