// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"jarash","repository":"asia","path":"jordan/jerash/jarash","depth":3,"parent":"jordan/jerash","children":["al-jabal-al-akhdar","hayy-abu-umrah","hayy-al-balad","hayy-wadi-ad-dayr-ash-sharqi","iskan-jarash","jabal-ash-shaykh-muslih"]});
export const childModules = Object.freeze({"al-jabal-al-akhdar":"./al-jabal-al-akhdar/al-jabal-al-akhdar.js","hayy-abu-umrah":"./hayy-abu-umrah/hayy-abu-umrah.js","hayy-al-balad":"./hayy-al-balad/hayy-al-balad.js","hayy-wadi-ad-dayr-ash-sharqi":"./hayy-wadi-ad-dayr-ash-sharqi/hayy-wadi-ad-dayr-ash-sharqi.js","iskan-jarash":"./iskan-jarash/iskan-jarash.js","jabal-ash-shaykh-muslih":"./jabal-ash-shaykh-muslih/jabal-ash-shaykh-muslih.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
