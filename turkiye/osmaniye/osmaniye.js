// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"osmaniye","repository":"asia","path":"turkiye/osmaniye","depth":2,"parent":"turkiye","children":["kadirli"]});
export const childModules = Object.freeze({"kadirli":"./kadirli/kadirli.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
