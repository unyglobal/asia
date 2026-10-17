// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"klungkung","repository":"asia","path":"indonesia/bali/klungkung","depth":3,"parent":"indonesia/bali","children":["banjar-bendul","banjar-bendungantukadunda","banjar-besang-kangin","banjar-bucu","banjar-budaga","banjar-kemuning-kaja","banjar-kemuning-kelod","banjar-pandegaliran","banjar-pegending","banjar-sangkabuana","banjar-sengguan"]});
export const childModules = Object.freeze({"banjar-bendul":"./banjar-bendul/banjar-bendul.js","banjar-bendungantukadunda":"./banjar-bendungantukadunda/banjar-bendungantukadunda.js","banjar-besang-kangin":"./banjar-besang-kangin/banjar-besang-kangin.js","banjar-bucu":"./banjar-bucu/banjar-bucu.js","banjar-budaga":"./banjar-budaga/banjar-budaga.js","banjar-kemuning-kaja":"./banjar-kemuning-kaja/banjar-kemuning-kaja.js","banjar-kemuning-kelod":"./banjar-kemuning-kelod/banjar-kemuning-kelod.js","banjar-pandegaliran":"./banjar-pandegaliran/banjar-pandegaliran.js","banjar-pegending":"./banjar-pegending/banjar-pegending.js","banjar-sangkabuana":"./banjar-sangkabuana/banjar-sangkabuana.js","banjar-sengguan":"./banjar-sengguan/banjar-sengguan.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
