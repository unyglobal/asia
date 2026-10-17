// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"salah-ad-din","repository":"asia","path":"iraq/salah-ad-din","depth":2,"parent":"iraq","children":["ad-dujayl","al-alam","ash-sharqat","balad","bayji","samarra","tikrit","tuz-khurmatu"]});
export const childModules = Object.freeze({"ad-dujayl":"./ad-dujayl/ad-dujayl.js","al-alam":"./al-alam/al-alam.js","ash-sharqat":"./ash-sharqat/ash-sharqat.js","balad":"./balad/balad.js","bayji":"./bayji/bayji.js","samarra":"./samarra/samarra.js","tikrit":"./tikrit/tikrit.js","tuz-khurmatu":"./tuz-khurmatu/tuz-khurmatu.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
