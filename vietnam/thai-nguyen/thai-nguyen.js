// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"thai-nguyen","repository":"asia","path":"vietnam/thai-nguyen","depth":2,"parent":"vietnam","children":["bac-kan","pho-yen","thanh-pho-song-cong","thi-tran-ai-tu"]});
export const childModules = Object.freeze({"bac-kan":"./bac-kan/bac-kan.js","pho-yen":"./pho-yen/pho-yen.js","thanh-pho-song-cong":"./thanh-pho-song-cong/thanh-pho-song-cong.js","thi-tran-ai-tu":"./thi-tran-ai-tu/thi-tran-ai-tu.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
