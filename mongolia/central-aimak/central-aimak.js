// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"central-aimak","repository":"asia","path":"mongolia/central-aimak","depth":2,"parent":"mongolia","children":["dzuunmod","zuunmod"]});
export const childModules = Object.freeze({"dzuunmod":"./dzuunmod/dzuunmod.js","zuunmod":"./zuunmod/zuunmod.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
