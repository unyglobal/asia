// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"khorramabad","repository":"asia","path":"iran/lorestan-province/khorramabad","depth":3,"parent":"iran/lorestan-province","children":["mahalleh-ye-posht-e-bazar","mahalleh-ye-shamshirabad"]});
export const childModules = Object.freeze({"mahalleh-ye-posht-e-bazar":"./mahalleh-ye-posht-e-bazar/mahalleh-ye-posht-e-bazar.js","mahalleh-ye-shamshirabad":"./mahalleh-ye-shamshirabad/mahalleh-ye-shamshirabad.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
