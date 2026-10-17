// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"tsirang-district","repository":"asia","path":"bhutan/tsirang-district","depth":2,"parent":"bhutan","children":["tsirang"]});
export const childModules = Object.freeze({"tsirang":"./tsirang/tsirang.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
