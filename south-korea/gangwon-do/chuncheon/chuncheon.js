// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"chuncheon","repository":"asia","path":"south-korea/gangwon-do/chuncheon","depth":3,"parent":"south-korea/gangwon-do","children":["hupyeongdong","hyojadong"]});
export const childModules = Object.freeze({"hupyeongdong":"./hupyeongdong/hupyeongdong.js","hyojadong":"./hyojadong/hyojadong.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
