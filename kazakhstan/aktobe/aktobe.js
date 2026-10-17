// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"aktobe","repository":"asia","path":"kazakhstan/aktobe","depth":2,"parent":"kazakhstan","children":["embi","kandyagash","khromtau","shalqar"]});
export const childModules = Object.freeze({"embi":"./embi/embi.js","kandyagash":"./kandyagash/kandyagash.js","khromtau":"./khromtau/khromtau.js","shalqar":"./shalqar/shalqar.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
