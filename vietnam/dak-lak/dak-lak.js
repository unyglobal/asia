// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"dak-lak","repository":"asia","path":"vietnam/dak-lak","depth":2,"parent":"vietnam","children":["buon-ho","buon-ma-thuot","buon-trap","ea-drang","ea-poc","phuoc-an","quang-phu","song-cau","tuy-hoa"]});
export const childModules = Object.freeze({"buon-ho":"./buon-ho/buon-ho.js","buon-ma-thuot":"./buon-ma-thuot/buon-ma-thuot.js","buon-trap":"./buon-trap/buon-trap.js","ea-drang":"./ea-drang/ea-drang.js","ea-poc":"./ea-poc/ea-poc.js","phuoc-an":"./phuoc-an/phuoc-an.js","quang-phu":"./quang-phu/quang-phu.js","song-cau":"./song-cau/song-cau.js","tuy-hoa":"./tuy-hoa/tuy-hoa.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
