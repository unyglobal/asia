// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"amlash","repository":"asia","path":"iran/gilan-province/amlash","depth":3,"parent":"iran/gilan-province","children":["pa-in-zarbijar","pelham-salek","zarchay"]});
export const childModules = Object.freeze({"pa-in-zarbijar":"./pa-in-zarbijar/pa-in-zarbijar.js","pelham-salek":"./pelham-salek/pelham-salek.js","zarchay":"./zarchay/zarchay.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
