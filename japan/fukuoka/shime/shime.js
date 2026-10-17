// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"shime","repository":"asia","path":"japan/fukuoka/shime","depth":3,"parent":"japan/fukuoka","children":["shimechuo"]});
export const childModules = Object.freeze({"shimechuo":"./shimechuo/shimechuo.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
