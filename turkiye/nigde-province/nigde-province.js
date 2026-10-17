// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"nigde-province","repository":"asia","path":"turkiye/nigde-province","depth":2,"parent":"turkiye","children":["bor","nigde"]});
export const childModules = Object.freeze({"bor":"./bor/bor.js","nigde":"./nigde/nigde.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
