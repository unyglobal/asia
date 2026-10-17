// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"meguro","repository":"asia","path":"japan/tokyo/meguro","depth":3,"parent":"japan/tokyo","children":["nakameguro","shimomeguro"]});
export const childModules = Object.freeze({"nakameguro":"./nakameguro/nakameguro.js","shimomeguro":"./shimomeguro/shimomeguro.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
