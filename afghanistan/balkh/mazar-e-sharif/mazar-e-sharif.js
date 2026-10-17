// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"mazar-e-sharif","repository":"asia","path":"afghanistan/balkh/mazar-e-sharif","depth":3,"parent":"afghanistan/balkh","children":["azizabad","bala-hisar","kartah-ye-mandowi"]});
export const childModules = Object.freeze({"azizabad":"./azizabad/azizabad.js","bala-hisar":"./bala-hisar/bala-hisar.js","kartah-ye-mandowi":"./kartah-ye-mandowi/kartah-ye-mandowi.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
