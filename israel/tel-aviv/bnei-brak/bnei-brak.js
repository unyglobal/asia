// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"bnei-brak","repository":"asia","path":"israel/tel-aviv/bnei-brak","depth":3,"parent":"israel/tel-aviv","children":["qiryat-hayeshiva","shkhunat-histadrut-alef"]});
export const childModules = Object.freeze({"qiryat-hayeshiva":"./qiryat-hayeshiva/qiryat-hayeshiva.js","shkhunat-histadrut-alef":"./shkhunat-histadrut-alef/shkhunat-histadrut-alef.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
