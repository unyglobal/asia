// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"vellalur","repository":"asia","path":"india/tamil-nadu/vellalur","depth":3,"parent":"india/tamil-nadu","children":["idaiyapalaiyam","vellalapalaiyam"]});
export const childModules = Object.freeze({"idaiyapalaiyam":"./idaiyapalaiyam/idaiyapalaiyam.js","vellalapalaiyam":"./vellalapalaiyam/vellalapalaiyam.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
