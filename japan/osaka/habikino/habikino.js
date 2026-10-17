// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"habikino","repository":"asia","path":"japan/osaka/habikino","depth":3,"parent":"japan/osaka","children":["gakuemmae","iga","karusato","momoyamadai"]});
export const childModules = Object.freeze({"gakuemmae":"./gakuemmae/gakuemmae.js","iga":"./iga/iga.js","karusato":"./karusato/karusato.js","momoyamadai":"./momoyamadai/momoyamadai.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
