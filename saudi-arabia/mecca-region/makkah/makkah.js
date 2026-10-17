// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"makkah","repository":"asia","path":"saudi-arabia/mecca-region/makkah","depth":3,"parent":"saudi-arabia/mecca-region","children":["al-haram","al-qararah","al-qushashiyah","harat-al-bab","harat-al-bab-wa-ash-shamiyah","hayy-al-qararah-wa-an-naqa","hayy-ash-shubaykah","hayy-jarwal","hayy-shi-b-amir-wa-shi-b-ali","suq-al-layl"]});
export const childModules = Object.freeze({"al-haram":"./al-haram/al-haram.js","al-qararah":"./al-qararah/al-qararah.js","al-qushashiyah":"./al-qushashiyah/al-qushashiyah.js","harat-al-bab":"./harat-al-bab/harat-al-bab.js","harat-al-bab-wa-ash-shamiyah":"./harat-al-bab-wa-ash-shamiyah/harat-al-bab-wa-ash-shamiyah.js","hayy-al-qararah-wa-an-naqa":"./hayy-al-qararah-wa-an-naqa/hayy-al-qararah-wa-an-naqa.js","hayy-ash-shubaykah":"./hayy-ash-shubaykah/hayy-ash-shubaykah.js","hayy-jarwal":"./hayy-jarwal/hayy-jarwal.js","hayy-shi-b-amir-wa-shi-b-ali":"./hayy-shi-b-amir-wa-shi-b-ali/hayy-shi-b-amir-wa-shi-b-ali.js","suq-al-layl":"./suq-al-layl/suq-al-layl.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
