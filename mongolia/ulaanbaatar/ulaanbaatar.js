// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ulaanbaatar","repository":"asia","path":"mongolia/ulaanbaatar","depth":2,"parent":"mongolia","children":["nalayh","ulan-bator"]});
export const childModules = Object.freeze({"nalayh":"./nalayh/nalayh.js","ulan-bator":"./ulan-bator/ulan-bator.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
