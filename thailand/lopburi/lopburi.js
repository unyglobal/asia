// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"lopburi","repository":"asia","path":"thailand/lopburi","depth":2,"parent":"thailand","children":["chai-badan","lop-buri"]});
export const childModules = Object.freeze({"chai-badan":"./chai-badan/chai-badan.js","lop-buri":"./lop-buri/lop-buri.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
