// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"north-kazakhstan","repository":"asia","path":"kazakhstan/north-kazakhstan","depth":2,"parent":"kazakhstan","children":["petropavl"]});
export const childModules = Object.freeze({"petropavl":"./petropavl/petropavl.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
