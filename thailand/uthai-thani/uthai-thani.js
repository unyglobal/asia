// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"uthai-thani","repository":"asia","path":"thailand/uthai-thani","depth":2,"parent":"thailand","children":["thap-than"]});
export const childModules = Object.freeze({"thap-than":"./thap-than/thap-than.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
