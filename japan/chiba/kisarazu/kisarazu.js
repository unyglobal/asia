// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kisarazu","repository":"asia","path":"japan/chiba/kisarazu","depth":3,"parent":"japan/chiba","children":["minami"]});
export const childModules = Object.freeze({"minami":"./minami/minami.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
