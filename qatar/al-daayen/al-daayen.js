// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"al-daayen","repository":"asia","path":"qatar/al-daayen","depth":2,"parent":"qatar","children":["az-za-ayin","lusail"]});
export const childModules = Object.freeze({"az-za-ayin":"./az-za-ayin/az-za-ayin.js","lusail":"./lusail/lusail.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
