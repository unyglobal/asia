// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"phitsanulok","repository":"asia","path":"thailand/phitsanulok","depth":2,"parent":"thailand","children":["ban-aranyik","bang-krathum","bang-rakam"]});
export const childModules = Object.freeze({"ban-aranyik":"./ban-aranyik/ban-aranyik.js","bang-krathum":"./bang-krathum/bang-krathum.js","bang-rakam":"./bang-rakam/bang-rakam.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
