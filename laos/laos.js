// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"laos","repository":"asia","path":"laos","depth":1,"parent":"","children":["bokeo","bolikhamsai","champasak-province","houaphan","khammouane-province","loungnamtha","luang-prabang-province","oudomxai","salavan-province","savannakhet-province","vientiane-prefecture","xekong","xiangkhoang"]});
export const childModules = Object.freeze({"bokeo":"./bokeo/bokeo.js","bolikhamsai":"./bolikhamsai/bolikhamsai.js","champasak-province":"./champasak-province/champasak-province.js","houaphan":"./houaphan/houaphan.js","khammouane-province":"./khammouane-province/khammouane-province.js","loungnamtha":"./loungnamtha/loungnamtha.js","luang-prabang-province":"./luang-prabang-province/luang-prabang-province.js","oudomxai":"./oudomxai/oudomxai.js","salavan-province":"./salavan-province/salavan-province.js","savannakhet-province":"./savannakhet-province/savannakhet-province.js","vientiane-prefecture":"./vientiane-prefecture/vientiane-prefecture.js","xekong":"./xekong/xekong.js","xiangkhoang":"./xiangkhoang/xiangkhoang.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
