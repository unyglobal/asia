// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"lao-cai","repository":"asia","path":"vietnam/lao-cai","depth":2,"parent":"vietnam","children":["nghia-lo","thi-tran-pho-lu","yen-bai"]});
export const childModules = Object.freeze({"nghia-lo":"./nghia-lo/nghia-lo.js","thi-tran-pho-lu":"./thi-tran-pho-lu/thi-tran-pho-lu.js","yen-bai":"./yen-bai/yen-bai.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
