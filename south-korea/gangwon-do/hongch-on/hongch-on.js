// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"hongch-on","repository":"asia","path":"south-korea/gangwon-do/hongch-on","depth":3,"parent":"south-korea/gangwon-do","children":["hongch-on-gyoyukch-ong","hongch-ondunggiso"]});
export const childModules = Object.freeze({"hongch-on-gyoyukch-ong":"./hongch-on-gyoyukch-ong/hongch-on-gyoyukch-ong.js","hongch-ondunggiso":"./hongch-ondunggiso/hongch-ondunggiso.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
