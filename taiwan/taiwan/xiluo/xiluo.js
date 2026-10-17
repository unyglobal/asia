// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"xiluo","repository":"asia","path":"taiwan/taiwan/xiluo","depth":3,"parent":"taiwan/taiwan","children":["qiedong"]});
export const childModules = Object.freeze({"qiedong":"./qiedong/qiedong.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
