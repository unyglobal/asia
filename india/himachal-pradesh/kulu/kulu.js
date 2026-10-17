// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kulu","repository":"asia","path":"india/himachal-pradesh/kulu","depth":3,"parent":"india/himachal-pradesh","children":["akhara","dhalpur","sarvari","sul-tanpur"]});
export const childModules = Object.freeze({"akhara":"./akhara/akhara.js","dhalpur":"./dhalpur/dhalpur.js","sarvari":"./sarvari/sarvari.js","sul-tanpur":"./sul-tanpur/sul-tanpur.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
