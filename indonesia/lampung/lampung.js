// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"lampung","repository":"asia","path":"indonesia/lampung","depth":2,"parent":"indonesia","children":["bandar-lampung","kotabumi","metro","terbanggi-besar"]});
export const childModules = Object.freeze({"bandar-lampung":"./bandar-lampung/bandar-lampung.js","kotabumi":"./kotabumi/kotabumi.js","metro":"./metro/metro.js","terbanggi-besar":"./terbanggi-besar/terbanggi-besar.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
