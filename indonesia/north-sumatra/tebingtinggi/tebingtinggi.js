// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"tebingtinggi","repository":"asia","path":"indonesia/north-sumatra/tebingtinggi","depth":3,"parent":"indonesia/north-sumatra","children":["tebingtinggilama"]});
export const childModules = Object.freeze({"tebingtinggilama":"./tebingtinggilama/tebingtinggilama.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
