// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"khanpur","repository":"asia","path":"pakistan/punjab/khanpur","depth":3,"parent":"pakistan/punjab","children":["model-town"]});
export const childModules = Object.freeze({"model-town":"./model-town/model-town.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
