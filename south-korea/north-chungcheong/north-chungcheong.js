// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"north-chungcheong","repository":"asia","path":"south-korea/north-chungcheong","depth":2,"parent":"south-korea","children":["cheongju-si","chinch-on","chungju","jungpyong","koesan","okcheon","yeongdong"]});
export const childModules = Object.freeze({"cheongju-si":"./cheongju-si/cheongju-si.js","chinch-on":"./chinch-on/chinch-on.js","chungju":"./chungju/chungju.js","jungpyong":"./jungpyong/jungpyong.js","koesan":"./koesan/koesan.js","okcheon":"./okcheon/okcheon.js","yeongdong":"./yeongdong/yeongdong.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
