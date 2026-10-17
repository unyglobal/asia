// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"north-sulawesi","repository":"asia","path":"indonesia/north-sulawesi","depth":2,"parent":"indonesia","children":["airmadidi","bitung","kotamobagu","manado","tahuna","tomohon","tondano"]});
export const childModules = Object.freeze({"airmadidi":"./airmadidi/airmadidi.js","bitung":"./bitung/bitung.js","kotamobagu":"./kotamobagu/kotamobagu.js","manado":"./manado/manado.js","tahuna":"./tahuna/tahuna.js","tomohon":"./tomohon/tomohon.js","tondano":"./tondano/tondano.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
