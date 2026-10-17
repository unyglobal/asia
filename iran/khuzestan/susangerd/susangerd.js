// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"susangerd","repository":"asia","path":"iran/khuzestan/susangerd","depth":3,"parent":"iran/khuzestan","children":["mahalleh-ye-abu-jalal-e-shomali","mahalleh-ye-khaz-aliyeh","mahalleh-ye-nowdastgah"]});
export const childModules = Object.freeze({"mahalleh-ye-abu-jalal-e-shomali":"./mahalleh-ye-abu-jalal-e-shomali/mahalleh-ye-abu-jalal-e-shomali.js","mahalleh-ye-khaz-aliyeh":"./mahalleh-ye-khaz-aliyeh/mahalleh-ye-khaz-aliyeh.js","mahalleh-ye-nowdastgah":"./mahalleh-ye-nowdastgah/mahalleh-ye-nowdastgah.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
