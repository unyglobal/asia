// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kuroiso","repository":"asia","path":"japan/tochigi/kuroiso","depth":3,"parent":"japan/tochigi","children":["kyokonsha"]});
export const childModules = Object.freeze({"kyokonsha":"./kyokonsha/kyokonsha.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
