// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kratie","repository":"asia","path":"cambodia/kratie","depth":2,"parent":"cambodia","children":["preaek-prasab","snuol"]});
export const childModules = Object.freeze({"preaek-prasab":"./preaek-prasab/preaek-prasab.js","snuol":"./snuol/snuol.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
