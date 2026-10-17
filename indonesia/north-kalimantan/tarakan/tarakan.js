// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"tarakan","repository":"asia","path":"indonesia/north-kalimantan/tarakan","depth":3,"parent":"indonesia/north-kalimantan","children":["karanganyar"]});
export const childModules = Object.freeze({"karanganyar":"./karanganyar/karanganyar.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
