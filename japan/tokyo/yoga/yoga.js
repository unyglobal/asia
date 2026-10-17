// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"yoga","repository":"asia","path":"japan/tokyo/yoga","depth":3,"parent":"japan/tokyo","children":["tamagawadai"]});
export const childModules = Object.freeze({"tamagawadai":"./tamagawadai/tamagawadai.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
