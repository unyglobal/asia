// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"loungnamtha","repository":"asia","path":"laos/loungnamtha","depth":2,"parent":"laos","children":["muang-sing"]});
export const childModules = Object.freeze({"muang-sing":"./muang-sing/muang-sing.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
