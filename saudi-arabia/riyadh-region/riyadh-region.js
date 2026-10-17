// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"riyadh-region","repository":"asia","path":"saudi-arabia/riyadh-region","depth":2,"parent":"saudi-arabia","children":["ad-dawadimi","ad-dilam","ad-dir-iyah","afif","al-kharj","as-sulayyil","az-zulfi","hawtah-bani-tamim","irqah","layla","riyadh","rumah","shaqra"]});
export const childModules = Object.freeze({"ad-dawadimi":"./ad-dawadimi/ad-dawadimi.js","ad-dilam":"./ad-dilam/ad-dilam.js","ad-dir-iyah":"./ad-dir-iyah/ad-dir-iyah.js","afif":"./afif/afif.js","al-kharj":"./al-kharj/al-kharj.js","as-sulayyil":"./as-sulayyil/as-sulayyil.js","az-zulfi":"./az-zulfi/az-zulfi.js","hawtah-bani-tamim":"./hawtah-bani-tamim/hawtah-bani-tamim.js","irqah":"./irqah/irqah.js","layla":"./layla/layla.js","riyadh":"./riyadh/riyadh.js","rumah":"./rumah/rumah.js","shaqra":"./shaqra/shaqra.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
