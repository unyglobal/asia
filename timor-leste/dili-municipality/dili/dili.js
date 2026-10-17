// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"dili","repository":"asia","path":"timor-leste/dili-municipality/dili","depth":3,"parent":"timor-leste/dili-municipality","children":["bairo-alto","balide","banderahun","bispo-medeiros","borohun","caicoli","farol","lafandaria","mata-doro","rumbia","tuanalaran","vila-verde","virdolosa"]});
export const childModules = Object.freeze({"bairo-alto":"./bairo-alto/bairo-alto.js","balide":"./balide/balide.js","banderahun":"./banderahun/banderahun.js","bispo-medeiros":"./bispo-medeiros/bispo-medeiros.js","borohun":"./borohun/borohun.js","caicoli":"./caicoli/caicoli.js","farol":"./farol/farol.js","lafandaria":"./lafandaria/lafandaria.js","mata-doro":"./mata-doro/mata-doro.js","rumbia":"./rumbia/rumbia.js","tuanalaran":"./tuanalaran/tuanalaran.js","vila-verde":"./vila-verde/vila-verde.js","virdolosa":"./virdolosa/virdolosa.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
