// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kaynasl","repository":"asia","path":"turkiye/duzce/kaynasl","depth":3,"parent":"turkiye/duzce","children":["kumluca","merkez"]});
export const childModules = Object.freeze({"kumluca":"./kumluca/kumluca.js","merkez":"./merkez/merkez.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
