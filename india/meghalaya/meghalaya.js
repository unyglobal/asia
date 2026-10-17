// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"meghalaya","repository":"asia","path":"india/meghalaya","depth":2,"parent":"india","children":["jowai","laitumkhrah","mankachar","mawlai-mawiong","nongpoh","nongstoin","nongthymmai","resubelpara","shella","shillong","tura","williamnagar"]});
export const childModules = Object.freeze({"jowai":"./jowai/jowai.js","laitumkhrah":"./laitumkhrah/laitumkhrah.js","mankachar":"./mankachar/mankachar.js","mawlai-mawiong":"./mawlai-mawiong/mawlai-mawiong.js","nongpoh":"./nongpoh/nongpoh.js","nongstoin":"./nongstoin/nongstoin.js","nongthymmai":"./nongthymmai/nongthymmai.js","resubelpara":"./resubelpara/resubelpara.js","shella":"./shella/shella.js","shillong":"./shillong/shillong.js","tura":"./tura/tura.js","williamnagar":"./williamnagar/williamnagar.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
