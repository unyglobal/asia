// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"bijar","repository":"asia","path":"iran/kurdistan-province/bijar","depth":3,"parent":"iran/kurdistan-province","children":["mahalleh-ye-kucheh-bagh","mahalleh-ye-rig-siah","mahalleh-ye-tazehabad"]});
export const childModules = Object.freeze({"mahalleh-ye-kucheh-bagh":"./mahalleh-ye-kucheh-bagh/mahalleh-ye-kucheh-bagh.js","mahalleh-ye-rig-siah":"./mahalleh-ye-rig-siah/mahalleh-ye-rig-siah.js","mahalleh-ye-tazehabad":"./mahalleh-ye-tazehabad/mahalleh-ye-tazehabad.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
