// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"south-pyongan","repository":"asia","path":"north-korea/south-pyongan","depth":2,"parent":"north-korea","children":["anju","ch-osal-li","chaeryong-ni","kaech-on","kangson","p-yongsong","paek-ak","sil-li","sinanju","sunch-on","tokch-on"]});
export const childModules = Object.freeze({"anju":"./anju/anju.js","ch-osal-li":"./ch-osal-li/ch-osal-li.js","chaeryong-ni":"./chaeryong-ni/chaeryong-ni.js","kaech-on":"./kaech-on/kaech-on.js","kangson":"./kangson/kangson.js","p-yongsong":"./p-yongsong/p-yongsong.js","paek-ak":"./paek-ak/paek-ak.js","sil-li":"./sil-li/sil-li.js","sinanju":"./sinanju/sinanju.js","sunch-on":"./sunch-on/sunch-on.js","tokch-on":"./tokch-on/tokch-on.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
