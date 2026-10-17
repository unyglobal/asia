// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"zahle","repository":"asia","path":"lebanon/bekaa/zahle","depth":3,"parent":"lebanon/bekaa","children":["berbara","el-midane","haouch-ez-zaraane","mar-elias"]});
export const childModules = Object.freeze({"berbara":"./berbara/berbara.js","el-midane":"./el-midane/el-midane.js","haouch-ez-zaraane":"./haouch-ez-zaraane/haouch-ez-zaraane.js","mar-elias":"./mar-elias/mar-elias.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
