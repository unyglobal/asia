// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"masjed-soleyman","repository":"asia","path":"iran/khuzestan/masjed-soleyman","depth":3,"parent":"iran/khuzestan","children":["mahalleh-ye-efram-bi","mahalleh-ye-istgah-e-sadd","mahalleh-ye-nomreh-ye-chehel","sabzabad"]});
export const childModules = Object.freeze({"mahalleh-ye-efram-bi":"./mahalleh-ye-efram-bi/mahalleh-ye-efram-bi.js","mahalleh-ye-istgah-e-sadd":"./mahalleh-ye-istgah-e-sadd/mahalleh-ye-istgah-e-sadd.js","mahalleh-ye-nomreh-ye-chehel":"./mahalleh-ye-nomreh-ye-chehel/mahalleh-ye-nomreh-ye-chehel.js","sabzabad":"./sabzabad/sabzabad.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
