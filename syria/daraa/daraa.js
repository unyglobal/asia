// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"daraa","repository":"asia","path":"syria/daraa","depth":2,"parent":"syria","children":["al-hirak","as-sanamayn","da-il","dar-a","inkhil","jasim","nawa","shaykh-miskin","tafas"]});
export const childModules = Object.freeze({"al-hirak":"./al-hirak/al-hirak.js","as-sanamayn":"./as-sanamayn/as-sanamayn.js","da-il":"./da-il/da-il.js","dar-a":"./dar-a/dar-a.js","inkhil":"./inkhil/inkhil.js","jasim":"./jasim/jasim.js","nawa":"./nawa/nawa.js","shaykh-miskin":"./shaykh-miskin/shaykh-miskin.js","tafas":"./tafas/tafas.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
