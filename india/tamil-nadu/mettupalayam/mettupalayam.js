// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"mettupalayam","repository":"asia","path":"india/tamil-nadu/mettupalayam","depth":3,"parent":"india/tamil-nadu","children":["chichadasampalaiyam","kariyampalaiyam"]});
export const childModules = Object.freeze({"chichadasampalaiyam":"./chichadasampalaiyam/chichadasampalaiyam.js","kariyampalaiyam":"./kariyampalaiyam/kariyampalaiyam.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
