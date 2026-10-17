// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"pandamaran","repository":"asia","path":"malaysia/selangor/pandamaran","depth":3,"parent":"malaysia/selangor","children":["kampong-raja-uda","kampong-sungai-sireh"]});
export const childModules = Object.freeze({"kampong-raja-uda":"./kampong-raja-uda/kampong-raja-uda.js","kampong-sungai-sireh":"./kampong-sungai-sireh/kampong-sungai-sireh.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
