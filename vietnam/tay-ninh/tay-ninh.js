// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"tay-ninh","repository":"asia","path":"vietnam/tay-ninh","depth":2,"parent":"vietnam","children":["can-giuoc","can-uoc","duong-minh-chau","hoa-thanh","phu-khuong","tan-an","trang-bang"]});
export const childModules = Object.freeze({"can-giuoc":"./can-giuoc/can-giuoc.js","can-uoc":"./can-uoc/can-uoc.js","duong-minh-chau":"./duong-minh-chau/duong-minh-chau.js","hoa-thanh":"./hoa-thanh/hoa-thanh.js","phu-khuong":"./phu-khuong/phu-khuong.js","tan-an":"./tan-an/tan-an.js","trang-bang":"./trang-bang/trang-bang.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
