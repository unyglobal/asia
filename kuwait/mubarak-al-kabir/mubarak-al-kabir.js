// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"mubarak-al-kabir","repository":"asia","path":"kuwait/mubarak-al-kabir","depth":2,"parent":"kuwait","children":["sabah-as-salim"]});
export const childModules = Object.freeze({"sabah-as-salim":"./sabah-as-salim/sabah-as-salim.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
