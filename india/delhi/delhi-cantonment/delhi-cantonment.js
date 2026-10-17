// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"delhi-cantonment","repository":"asia","path":"india/delhi/delhi-cantonment","depth":3,"parent":"india/delhi","children":["baird-place","chitral-lines","kabul-lines"]});
export const childModules = Object.freeze({"baird-place":"./baird-place/baird-place.js","chitral-lines":"./chitral-lines/chitral-lines.js","kabul-lines":"./kabul-lines/kabul-lines.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
