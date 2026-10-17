// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ladakh","repository":"asia","path":"india/ladakh","depth":2,"parent":"india","children":["kargil","leh","padam"]});
export const childModules = Object.freeze({"kargil":"./kargil/kargil.js","leh":"./leh/leh.js","padam":"./padam/padam.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
