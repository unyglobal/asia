// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"north-kalimantan","repository":"asia","path":"indonesia/north-kalimantan","depth":2,"parent":"indonesia","children":["malinau","nunukan","tanjung-selor","tarakan"]});
export const childModules = Object.freeze({"malinau":"./malinau/malinau.js","nunukan":"./nunukan/nunukan.js","tanjung-selor":"./tanjung-selor/tanjung-selor.js","tarakan":"./tarakan/tarakan.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
