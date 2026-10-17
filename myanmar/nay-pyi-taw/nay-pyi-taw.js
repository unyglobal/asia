// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"nay-pyi-taw","repository":"asia","path":"myanmar/nay-pyi-taw","depth":2,"parent":"myanmar","children":["lewe","pyinmana"]});
export const childModules = Object.freeze({"lewe":"./lewe/lewe.js","pyinmana":"./pyinmana/pyinmana.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
