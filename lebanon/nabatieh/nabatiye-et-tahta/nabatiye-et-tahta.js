// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"nabatiye-et-tahta","repository":"asia","path":"lebanon/nabatieh/nabatiye-et-tahta","depth":3,"parent":"lebanon/nabatieh","children":["el-baiyad","el-meidane","es-salam","es-saraya"]});
export const childModules = Object.freeze({"el-baiyad":"./el-baiyad/el-baiyad.js","el-meidane":"./el-meidane/el-meidane.js","es-salam":"./es-salam/es-salam.js","es-saraya":"./es-saraya/es-saraya.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
