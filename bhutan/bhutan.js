// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"bhutan","repository":"asia","path":"bhutan","depth":1,"parent":"","children":["chukha","punakha","thimphu-district","tsirang-district"]});
export const childModules = Object.freeze({"chukha":"./chukha/chukha.js","punakha":"./punakha/punakha.js","thimphu-district":"./thimphu-district/thimphu-district.js","tsirang-district":"./tsirang-district/tsirang-district.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
