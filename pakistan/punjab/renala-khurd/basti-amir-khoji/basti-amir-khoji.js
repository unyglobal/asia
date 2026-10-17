// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"basti-amir-khoji","repository":"asia","path":"pakistan/punjab/renala-khurd/basti-amir-khoji","depth":4,"parent":"pakistan/punjab/renala-khurd","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
