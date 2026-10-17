// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"tashkent-region","repository":"asia","path":"uzbekistan/tashkent-region","depth":2,"parent":"uzbekistan","children":["angren","bekobod","bo-ka","chinoz","chirchiq","g-azalkent","iskandar","ohangaron","olmaliq","parkent","piskent","qibray","salor","tuytepa","yangiobod","yangiyul","zafar"]});
export const childModules = Object.freeze({"angren":"./angren/angren.js","bekobod":"./bekobod/bekobod.js","bo-ka":"./bo-ka/bo-ka.js","chinoz":"./chinoz/chinoz.js","chirchiq":"./chirchiq/chirchiq.js","g-azalkent":"./g-azalkent/g-azalkent.js","iskandar":"./iskandar/iskandar.js","ohangaron":"./ohangaron/ohangaron.js","olmaliq":"./olmaliq/olmaliq.js","parkent":"./parkent/parkent.js","piskent":"./piskent/piskent.js","qibray":"./qibray/qibray.js","salor":"./salor/salor.js","tuytepa":"./tuytepa/tuytepa.js","yangiobod":"./yangiobod/yangiobod.js","yangiyul":"./yangiyul/yangiyul.js","zafar":"./zafar/zafar.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
