// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"quang-ngai","repository":"asia","path":"vietnam/quang-ngai","depth":2,"parent":"vietnam","children":["kon-tum","ly-son","my-khe","my-lai","uc-pho"]});
export const childModules = Object.freeze({"kon-tum":"./kon-tum/kon-tum.js","ly-son":"./ly-son/ly-son.js","my-khe":"./my-khe/my-khe.js","my-lai":"./my-lai/my-lai.js","uc-pho":"./uc-pho/uc-pho.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
