// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"aksaray","repository":"asia","path":"turkiye/aksaray","depth":2,"parent":"turkiye","children":["ortakoy"]});
export const childModules = Object.freeze({"ortakoy":"./ortakoy/ortakoy.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
