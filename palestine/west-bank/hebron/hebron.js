// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"hebron","repository":"asia","path":"palestine/west-bank/hebron","depth":3,"parent":"palestine/west-bank","children":["al-mahawir","ayn-sarah","bab-az-zawiyah","jabal-ar-rahmah","murabba-at-sabtah","wadi-at-tuffah-al-jadid","wadi-at-tuffah-al-qadim"]});
export const childModules = Object.freeze({"al-mahawir":"./al-mahawir/al-mahawir.js","ayn-sarah":"./ayn-sarah/ayn-sarah.js","bab-az-zawiyah":"./bab-az-zawiyah/bab-az-zawiyah.js","jabal-ar-rahmah":"./jabal-ar-rahmah/jabal-ar-rahmah.js","murabba-at-sabtah":"./murabba-at-sabtah/murabba-at-sabtah.js","wadi-at-tuffah-al-jadid":"./wadi-at-tuffah-al-jadid/wadi-at-tuffah-al-jadid.js","wadi-at-tuffah-al-qadim":"./wadi-at-tuffah-al-qadim/wadi-at-tuffah-al-qadim.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
