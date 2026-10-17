// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"highland-papua","repository":"asia","path":"indonesia/highland-papua","depth":2,"parent":"indonesia","children":["tiom","wamena"]});
export const childModules = Object.freeze({"tiom":"./tiom/tiom.js","wamena":"./wamena/wamena.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
