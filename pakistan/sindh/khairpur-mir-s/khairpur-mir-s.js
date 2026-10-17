// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"khairpur-mir-s","repository":"asia","path":"pakistan/sindh/khairpur-mir-s","depth":3,"parent":"pakistan/sindh","children":["unar-colony"]});
export const childModules = Object.freeze({"unar-colony":"./unar-colony/unar-colony.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
