// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"sulaymaniyah","repository":"asia","path":"iraq/sulaymaniyah","depth":2,"parent":"iraq","children":["baynjiwayn","derbendixan","hajiawa","jamjamal","kelar","qe-adize","ranyah","shurash"]});
export const childModules = Object.freeze({"baynjiwayn":"./baynjiwayn/baynjiwayn.js","derbendixan":"./derbendixan/derbendixan.js","hajiawa":"./hajiawa/hajiawa.js","jamjamal":"./jamjamal/jamjamal.js","kelar":"./kelar/kelar.js","qe-adize":"./qe-adize/qe-adize.js","ranyah":"./ranyah/ranyah.js","shurash":"./shurash/shurash.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
