// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"erzurum","repository":"asia","path":"turkiye/erzurum","depth":2,"parent":"turkiye","children":["askale","cat","h-n-s","horasan","karacoban","oltu","pasinler"]});
export const childModules = Object.freeze({"askale":"./askale/askale.js","cat":"./cat/cat.js","h-n-s":"./h-n-s/h-n-s.js","horasan":"./horasan/horasan.js","karacoban":"./karacoban/karacoban.js","oltu":"./oltu/oltu.js","pasinler":"./pasinler/pasinler.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
