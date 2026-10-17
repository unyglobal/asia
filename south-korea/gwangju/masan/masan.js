// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"masan","repository":"asia","path":"south-korea/gwangju/masan","depth":3,"parent":"south-korea/gwangju","children":["byeokjindong"]});
export const childModules = Object.freeze({"byeokjindong":"./byeokjindong/byeokjindong.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
