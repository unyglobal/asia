// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"bahadurgarh","repository":"asia","path":"india/haryana/bahadurgarh","depth":3,"parent":"india/haryana","children":["hasanpur","pamala","shastrinagar"]});
export const childModules = Object.freeze({"hasanpur":"./hasanpur/hasanpur.js","pamala":"./pamala/pamala.js","shastrinagar":"./shastrinagar/shastrinagar.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
