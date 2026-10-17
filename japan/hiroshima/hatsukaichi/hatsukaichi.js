// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"hatsukaichi","repository":"asia","path":"japan/hiroshima/hatsukaichi","depth":3,"parent":"japan/hiroshima","children":["hera","kushido","miyauchi","shimohera","shingu","sumiyoshi"]});
export const childModules = Object.freeze({"hera":"./hera/hera.js","kushido":"./kushido/kushido.js","miyauchi":"./miyauchi/miyauchi.js","shimohera":"./shimohera/shimohera.js","shingu":"./shingu/shingu.js","sumiyoshi":"./sumiyoshi/sumiyoshi.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
