// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"al-qamishli","repository":"asia","path":"syria/al-hasakah/al-qamishli","depth":3,"parent":"syria/al-hasakah","children":["khanika"]});
export const childModules = Object.freeze({"khanika":"./khanika/khanika.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
