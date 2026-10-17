// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"dong-nai","repository":"asia","path":"vietnam/dong-nai","depth":2,"parent":"vietnam","children":["bien-hoa","chon-thanh","long-khanh","long-thanh","ong-xoai","phuoc-hoa","trang-bom","xuan-loc"]});
export const childModules = Object.freeze({"bien-hoa":"./bien-hoa/bien-hoa.js","chon-thanh":"./chon-thanh/chon-thanh.js","long-khanh":"./long-khanh/long-khanh.js","long-thanh":"./long-thanh/long-thanh.js","ong-xoai":"./ong-xoai/ong-xoai.js","phuoc-hoa":"./phuoc-hoa/phuoc-hoa.js","trang-bom":"./trang-bom/trang-bom.js","xuan-loc":"./xuan-loc/xuan-loc.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
