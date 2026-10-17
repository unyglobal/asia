// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"loei","repository":"asia","path":"thailand/loei","depth":2,"parent":"thailand","children":["erawan","phu-kradueng","wang-saphung"]});
export const childModules = Object.freeze({"erawan":"./erawan/erawan.js","phu-kradueng":"./phu-kradueng/phu-kradueng.js","wang-saphung":"./wang-saphung/wang-saphung.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
