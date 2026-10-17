// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"eilat","repository":"asia","path":"israel/southern-district/eilat","depth":3,"parent":"israel/southern-district","children":["amdar","arava","hadeqel","haeshel","merkaz","ofir","tsofit-illit","tsofit-tahtit","ye-elim"]});
export const childModules = Object.freeze({"amdar":"./amdar/amdar.js","arava":"./arava/arava.js","hadeqel":"./hadeqel/hadeqel.js","haeshel":"./haeshel/haeshel.js","merkaz":"./merkaz/merkaz.js","ofir":"./ofir/ofir.js","tsofit-illit":"./tsofit-illit/tsofit-illit.js","tsofit-tahtit":"./tsofit-tahtit/tsofit-tahtit.js","ye-elim":"./ye-elim/ye-elim.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
