// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"pakur","repository":"asia","path":"india/jharkhand/pakur","depth":3,"parent":"india/jharkhand","children":["aliganj","kitajor"]});
export const childModules = Object.freeze({"aliganj":"./aliganj/aliganj.js","kitajor":"./kitajor/kitajor.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
