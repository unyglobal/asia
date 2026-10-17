// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"qurayyat","repository":"asia","path":"oman/muscat/qurayyat","depth":3,"parent":"oman/muscat","children":["al-murrah","al-qallaf","al-wusta","az-zaqqaq","lijzirah","shamal-as-sahil"]});
export const childModules = Object.freeze({"al-murrah":"./al-murrah/al-murrah.js","al-qallaf":"./al-qallaf/al-qallaf.js","al-wusta":"./al-wusta/al-wusta.js","az-zaqqaq":"./az-zaqqaq/az-zaqqaq.js","lijzirah":"./lijzirah/lijzirah.js","shamal-as-sahil":"./shamal-as-sahil/shamal-as-sahil.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
