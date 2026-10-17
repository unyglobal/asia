// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kanchanaburi","repository":"asia","path":"thailand/kanchanaburi","depth":2,"parent":"thailand","children":["bo-phloi","nong-prue","tha-maka","tha-muang"]});
export const childModules = Object.freeze({"bo-phloi":"./bo-phloi/bo-phloi.js","nong-prue":"./nong-prue/nong-prue.js","tha-maka":"./tha-maka/tha-maka.js","tha-muang":"./tha-muang/tha-muang.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
