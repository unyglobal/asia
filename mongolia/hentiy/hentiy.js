// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"hentiy","repository":"asia","path":"mongolia/hentiy","depth":2,"parent":"mongolia","children":["undurkhaan"]});
export const childModules = Object.freeze({"undurkhaan":"./undurkhaan/undurkhaan.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
