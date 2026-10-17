// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"tochio-honcho","repository":"asia","path":"japan/niigata/tochio-honcho","depth":3,"parent":"japan/niigata","children":["amagashima","kanazawa","kanemachi","sakaecho","yachi"]});
export const childModules = Object.freeze({"amagashima":"./amagashima/amagashima.js","kanazawa":"./kanazawa/kanazawa.js","kanemachi":"./kanemachi/kanemachi.js","sakaecho":"./sakaecho/sakaecho.js","yachi":"./yachi/yachi.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
