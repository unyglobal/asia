// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"nabha","repository":"asia","path":"india/punjab/nabha","depth":3,"parent":"india/punjab","children":["kotwali"]});
export const childModules = Object.freeze({"kotwali":"./kotwali/kotwali.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
