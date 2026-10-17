// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"sumoto","repository":"asia","path":"japan/hyogo/sumoto","depth":3,"parent":"japan/hyogo","children":["hommachi","kaigandori","kamimonobe","monobe","sakaemachi","takenokuchi","uyama","yamate"]});
export const childModules = Object.freeze({"hommachi":"./hommachi/hommachi.js","kaigandori":"./kaigandori/kaigandori.js","kamimonobe":"./kamimonobe/kamimonobe.js","monobe":"./monobe/monobe.js","sakaemachi":"./sakaemachi/sakaemachi.js","takenokuchi":"./takenokuchi/takenokuchi.js","uyama":"./uyama/uyama.js","yamate":"./yamate/yamate.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
