// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"yogyakarta","repository":"asia","path":"indonesia/yogyakarta","depth":2,"parent":"indonesia","children":["bambanglipuro","bantul","gamping-lor","godean","kasihan","melati","pandak","pundong","sewon","sleman","srandakan","wonosari"]});
export const childModules = Object.freeze({"bambanglipuro":"./bambanglipuro/bambanglipuro.js","bantul":"./bantul/bantul.js","gamping-lor":"./gamping-lor/gamping-lor.js","godean":"./godean/godean.js","kasihan":"./kasihan/kasihan.js","melati":"./melati/melati.js","pandak":"./pandak/pandak.js","pundong":"./pundong/pundong.js","sewon":"./sewon/sewon.js","sleman":"./sleman/sleman.js","srandakan":"./srandakan/srandakan.js","wonosari":"./wonosari/wonosari.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
