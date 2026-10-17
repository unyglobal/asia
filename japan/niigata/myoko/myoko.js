// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"myoko","repository":"asia","path":"japan/niigata/myoko","depth":3,"parent":"japan/niigata","children":["asahicho","hakusancho","hidanomori","ishizukacho","oizumo","sekigawacho","suwacho","tamachi"]});
export const childModules = Object.freeze({"asahicho":"./asahicho/asahicho.js","hakusancho":"./hakusancho/hakusancho.js","hidanomori":"./hidanomori/hidanomori.js","ishizukacho":"./ishizukacho/ishizukacho.js","oizumo":"./oizumo/oizumo.js","sekigawacho":"./sekigawacho/sekigawacho.js","suwacho":"./suwacho/suwacho.js","tamachi":"./tamachi/tamachi.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
