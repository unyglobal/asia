// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"daran","repository":"asia","path":"iran/isfahan/daran","depth":3,"parent":"iran/isfahan","children":["boq-eh-ye-sheykh-abu-soleyman","mahalleh-ye-eslamabad","mahalleh-ye-pa-in","mahalleh-ye-torkabad"]});
export const childModules = Object.freeze({"boq-eh-ye-sheykh-abu-soleyman":"./boq-eh-ye-sheykh-abu-soleyman/boq-eh-ye-sheykh-abu-soleyman.js","mahalleh-ye-eslamabad":"./mahalleh-ye-eslamabad/mahalleh-ye-eslamabad.js","mahalleh-ye-pa-in":"./mahalleh-ye-pa-in/mahalleh-ye-pa-in.js","mahalleh-ye-torkabad":"./mahalleh-ye-torkabad/mahalleh-ye-torkabad.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
