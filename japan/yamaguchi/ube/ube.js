// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ube","repository":"asia","path":"japan/yamaguchi/ube","depth":3,"parent":"japan/yamaguchi","children":["minatomachi","shintencho","showacho"]});
export const childModules = Object.freeze({"minatomachi":"./minatomachi/minatomachi.js","shintencho":"./shintencho/shintencho.js","showacho":"./showacho/showacho.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
