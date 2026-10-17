// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"sama-il","repository":"asia","path":"oman/ad-dakhiliyah/sama-il","depth":3,"parent":"oman/ad-dakhiliyah","children":["az-zufayr","ilayat-sama-il","qarn-al-jariyah"]});
export const childModules = Object.freeze({"az-zufayr":"./az-zufayr/az-zufayr.js","ilayat-sama-il":"./ilayat-sama-il/ilayat-sama-il.js","qarn-al-jariyah":"./qarn-al-jariyah/qarn-al-jariyah.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
