// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"khanh-hoa","repository":"asia","path":"vietnam/khanh-hoa","depth":2,"parent":"vietnam","children":["nha-trang","ninh-hoa","phan-rang-thap-cham","tu-bong"]});
export const childModules = Object.freeze({"nha-trang":"./nha-trang/nha-trang.js","ninh-hoa":"./ninh-hoa/ninh-hoa.js","phan-rang-thap-cham":"./phan-rang-thap-cham/phan-rang-thap-cham.js","tu-bong":"./tu-bong/tu-bong.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
