// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"south-kalimantan","repository":"asia","path":"indonesia/south-kalimantan","depth":2,"parent":"indonesia","children":["amuntai","banjarbaru","banjarmasin","barabai","martapura","tanjung"]});
export const childModules = Object.freeze({"amuntai":"./amuntai/amuntai.js","banjarbaru":"./banjarbaru/banjarbaru.js","banjarmasin":"./banjarmasin/banjarmasin.js","barabai":"./barabai/barabai.js","martapura":"./martapura/martapura.js","tanjung":"./tanjung/tanjung.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
