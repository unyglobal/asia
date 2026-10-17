// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"hung-yen-province","repository":"asia","path":"vietnam/hung-yen-province","depth":2,"parent":"vietnam","children":["ecopark","hung-yen","luong-bang","my-hao","thai-binh"]});
export const childModules = Object.freeze({"ecopark":"./ecopark/ecopark.js","hung-yen":"./hung-yen/hung-yen.js","luong-bang":"./luong-bang/luong-bang.js","my-hao":"./my-hao/my-hao.js","thai-binh":"./thai-binh/thai-binh.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
