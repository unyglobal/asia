// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"nakhon-pathom","repository":"asia","path":"thailand/nakhon-pathom","depth":2,"parent":"thailand","children":["bang-len","sam-phran"]});
export const childModules = Object.freeze({"bang-len":"./bang-len/bang-len.js","sam-phran":"./sam-phran/sam-phran.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
