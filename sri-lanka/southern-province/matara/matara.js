// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"matara","repository":"asia","path":"sri-lanka/southern-province/matara","depth":3,"parent":"sri-lanka/southern-province","children":["gabadawidiya","ginigasmulla","paramulla","weliweriya"]});
export const childModules = Object.freeze({"gabadawidiya":"./gabadawidiya/gabadawidiya.js","ginigasmulla":"./ginigasmulla/ginigasmulla.js","paramulla":"./paramulla/paramulla.js","weliweriya":"./weliweriya/weliweriya.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
