// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"umm-el-fahm","repository":"asia","path":"israel/haifa/umm-el-fahm","depth":3,"parent":"israel/haifa","children":["araq-es-sabab"]});
export const childModules = Object.freeze({"araq-es-sabab":"./araq-es-sabab/araq-es-sabab.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
