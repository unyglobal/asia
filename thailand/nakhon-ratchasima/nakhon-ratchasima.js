// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"nakhon-ratchasima","repository":"asia","path":"thailand/nakhon-ratchasima","depth":2,"parent":"thailand","children":["amphoe-sikhiu","ban-huai-thalaeng","bua-yai","chok-chai","dan-khun-thot","khon-buri","non-sung","pak-chong"]});
export const childModules = Object.freeze({"amphoe-sikhiu":"./amphoe-sikhiu/amphoe-sikhiu.js","ban-huai-thalaeng":"./ban-huai-thalaeng/ban-huai-thalaeng.js","bua-yai":"./bua-yai/bua-yai.js","chok-chai":"./chok-chai/chok-chai.js","dan-khun-thot":"./dan-khun-thot/dan-khun-thot.js","khon-buri":"./khon-buri/khon-buri.js","non-sung":"./non-sung/non-sung.js","pak-chong":"./pak-chong/pak-chong.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
