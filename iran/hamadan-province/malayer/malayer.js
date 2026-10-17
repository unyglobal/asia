// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"malayer","repository":"asia","path":"iran/hamadan-province/malayer","depth":3,"parent":"iran/hamadan-province","children":["mahalleh-ye-iman","mahalleh-ye-vali-ye-asr"]});
export const childModules = Object.freeze({"mahalleh-ye-iman":"./mahalleh-ye-iman/mahalleh-ye-iman.js","mahalleh-ye-vali-ye-asr":"./mahalleh-ye-vali-ye-asr/mahalleh-ye-vali-ye-asr.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
