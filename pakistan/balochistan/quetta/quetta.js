// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"quetta","repository":"asia","path":"pakistan/balochistan/quetta","depth":3,"parent":"pakistan/balochistan","children":["gulshan-e-hoti","gwal-mandi","kili-khaliqabad","sariab-phatak"]});
export const childModules = Object.freeze({"gulshan-e-hoti":"./gulshan-e-hoti/gulshan-e-hoti.js","gwal-mandi":"./gwal-mandi/gwal-mandi.js","kili-khaliqabad":"./kili-khaliqabad/kili-khaliqabad.js","sariab-phatak":"./sariab-phatak/sariab-phatak.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
