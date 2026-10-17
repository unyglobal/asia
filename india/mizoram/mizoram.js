// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"mizoram","repository":"asia","path":"india/mizoram","depth":2,"parent":"india","children":["aizawl","kolasib","lawngtlai","lunglei","ngur","saiha","serchhip"]});
export const childModules = Object.freeze({"aizawl":"./aizawl/aizawl.js","kolasib":"./kolasib/kolasib.js","lawngtlai":"./lawngtlai/lawngtlai.js","lunglei":"./lunglei/lunglei.js","ngur":"./ngur/ngur.js","saiha":"./saiha/saiha.js","serchhip":"./serchhip/serchhip.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
