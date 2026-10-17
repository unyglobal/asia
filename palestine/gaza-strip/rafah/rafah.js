// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"rafah","repository":"asia","path":"palestine/gaza-strip/rafah","depth":3,"parent":"palestine/gaza-strip","children":["hijazi","tall-az-zu-rub"]});
export const childModules = Object.freeze({"hijazi":"./hijazi/hijazi.js","tall-az-zu-rub":"./tall-az-zu-rub/tall-az-zu-rub.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
