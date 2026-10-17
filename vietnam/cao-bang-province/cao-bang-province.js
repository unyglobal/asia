// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"cao-bang-province","repository":"asia","path":"vietnam/cao-bang-province","depth":2,"parent":"vietnam","children":["cao-bang","thi-tran-nuoc-hai","thi-tran-trung-khanh"]});
export const childModules = Object.freeze({"cao-bang":"./cao-bang/cao-bang.js","thi-tran-nuoc-hai":"./thi-tran-nuoc-hai/thi-tran-nuoc-hai.js","thi-tran-trung-khanh":"./thi-tran-trung-khanh/thi-tran-trung-khanh.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
