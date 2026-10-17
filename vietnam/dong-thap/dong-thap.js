// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"dong-thap","repository":"asia","path":"vietnam/dong-thap","depth":2,"parent":"vietnam","children":["cai-lay","cao-lanh","go-cong","hong-ngu","lai-vung","my-tho","sa-dec","tram-chim"]});
export const childModules = Object.freeze({"cai-lay":"./cai-lay/cai-lay.js","cao-lanh":"./cao-lanh/cao-lanh.js","go-cong":"./go-cong/go-cong.js","hong-ngu":"./hong-ngu/hong-ngu.js","lai-vung":"./lai-vung/lai-vung.js","my-tho":"./my-tho/my-tho.js","sa-dec":"./sa-dec/sa-dec.js","tram-chim":"./tram-chim/tram-chim.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
