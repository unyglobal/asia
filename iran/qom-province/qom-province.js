// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"qom-province","repository":"asia","path":"iran/qom-province","depth":2,"parent":"iran","children":["qom","shahrak-e-pardisan"]});
export const childModules = Object.freeze({"qom":"./qom/qom.js","shahrak-e-pardisan":"./shahrak-e-pardisan/shahrak-e-pardisan.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
