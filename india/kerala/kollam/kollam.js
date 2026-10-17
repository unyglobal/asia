// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kollam","repository":"asia","path":"india/kerala/kollam","depth":3,"parent":"india/kerala","children":["chinnakkada"]});
export const childModules = Object.freeze({"chinnakkada":"./chinnakkada/chinnakkada.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
