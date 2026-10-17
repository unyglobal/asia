// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"taito","repository":"asia","path":"japan/tokyo/taito","depth":3,"parent":"japan/tokyo","children":["ueno"]});
export const childModules = Object.freeze({"ueno":"./ueno/ueno.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
