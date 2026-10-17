// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kirikkale","repository":"asia","path":"turkiye/kirikkale","depth":2,"parent":"turkiye","children":["k-r-kkale","keskin"]});
export const childModules = Object.freeze({"k-r-kkale":"./k-r-kkale/k-r-kkale.js","keskin":"./keskin/keskin.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
