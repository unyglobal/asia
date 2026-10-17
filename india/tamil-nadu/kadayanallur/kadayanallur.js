// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kadayanallur","repository":"asia","path":"india/tamil-nadu/kadayanallur","depth":3,"parent":"india/tamil-nadu","children":["pettai"]});
export const childModules = Object.freeze({"pettai":"./pettai/pettai.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
