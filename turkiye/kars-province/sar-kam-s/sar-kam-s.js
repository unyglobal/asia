// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"sar-kam-s","repository":"asia","path":"turkiye/kars-province/sar-kam-s","depth":3,"parent":"turkiye/kars-province","children":["cumhuriyet","erenler","inonu","tepe","yeni"]});
export const childModules = Object.freeze({"cumhuriyet":"./cumhuriyet/cumhuriyet.js","erenler":"./erenler/erenler.js","inonu":"./inonu/inonu.js","tepe":"./tepe/tepe.js","yeni":"./yeni/yeni.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
