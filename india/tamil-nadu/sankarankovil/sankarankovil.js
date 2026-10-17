// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"sankarankovil","repository":"asia","path":"india/tamil-nadu/sankarankovil","depth":3,"parent":"india/tamil-nadu","children":["pallacheri"]});
export const childModules = Object.freeze({"pallacheri":"./pallacheri/pallacheri.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
