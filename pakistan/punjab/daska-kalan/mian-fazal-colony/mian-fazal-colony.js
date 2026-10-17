// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"mian-fazal-colony","repository":"asia","path":"pakistan/punjab/daska-kalan/mian-fazal-colony","depth":4,"parent":"pakistan/punjab/daska-kalan","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
