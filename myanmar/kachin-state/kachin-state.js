// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kachin-state","repository":"asia","path":"myanmar/kachin-state","depth":2,"parent":"myanmar","children":["bhamo","danai","hopin","hpakan","lakang","mogaung","mohnyin","myitkyina","shwegu"]});
export const childModules = Object.freeze({"bhamo":"./bhamo/bhamo.js","danai":"./danai/danai.js","hopin":"./hopin/hopin.js","hpakan":"./hpakan/hpakan.js","lakang":"./lakang/lakang.js","mogaung":"./mogaung/mogaung.js","mohnyin":"./mohnyin/mohnyin.js","myitkyina":"./myitkyina/myitkyina.js","shwegu":"./shwegu/shwegu.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
