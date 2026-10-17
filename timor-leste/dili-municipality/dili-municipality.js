// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"dili-municipality","repository":"asia","path":"timor-leste/dili-municipality","depth":2,"parent":"timor-leste","children":["dili"]});
export const childModules = Object.freeze({"dili":"./dili/dili.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
