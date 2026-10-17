// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kuetahya","repository":"asia","path":"turkiye/kuetahya","depth":2,"parent":"turkiye","children":["emet","gediz","kutahya","simav","tavsanl"]});
export const childModules = Object.freeze({"emet":"./emet/emet.js","gediz":"./gediz/gediz.js","kutahya":"./kutahya/kutahya.js","simav":"./simav/simav.js","tavsanl":"./tavsanl/tavsanl.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
