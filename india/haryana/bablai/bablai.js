// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"bablai","repository":"asia","path":"india/haryana/bablai","depth":3,"parent":"india/haryana","children":["dalipgarh"]});
export const childModules = Object.freeze({"dalipgarh":"./dalipgarh/dalipgarh.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
