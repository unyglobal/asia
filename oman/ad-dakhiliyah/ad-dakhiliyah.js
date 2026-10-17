// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ad-dakhiliyah","repository":"asia","path":"oman/ad-dakhiliyah","depth":2,"parent":"oman","children":["adam","bahla","bidbid","izki","nizwa","sama-il","sufalat-sama-il"]});
export const childModules = Object.freeze({"adam":"./adam/adam.js","bahla":"./bahla/bahla.js","bidbid":"./bidbid/bidbid.js","izki":"./izki/izki.js","nizwa":"./nizwa/nizwa.js","sama-il":"./sama-il/sama-il.js","sufalat-sama-il":"./sufalat-sama-il/sufalat-sama-il.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
