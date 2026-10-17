// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"nerkunram","repository":"asia","path":"india/tamil-nadu/nerkunram","depth":3,"parent":"india/tamil-nadu","children":["padmanabha-nagar"]});
export const childModules = Object.freeze({"padmanabha-nagar":"./padmanabha-nagar/padmanabha-nagar.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
