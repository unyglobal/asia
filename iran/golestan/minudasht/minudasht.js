// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"minudasht","repository":"asia","path":"iran/golestan/minudasht","depth":3,"parent":"iran/golestan","children":["div-tappeh","mahalleh-ye-koshtargah","mahalleh-ye-now-bahar","shahrak-e-farhangian","shahrak-e-razmandegan"]});
export const childModules = Object.freeze({"div-tappeh":"./div-tappeh/div-tappeh.js","mahalleh-ye-koshtargah":"./mahalleh-ye-koshtargah/mahalleh-ye-koshtargah.js","mahalleh-ye-now-bahar":"./mahalleh-ye-now-bahar/mahalleh-ye-now-bahar.js","shahrak-e-farhangian":"./shahrak-e-farhangian/shahrak-e-farhangian.js","shahrak-e-razmandegan":"./shahrak-e-razmandegan/shahrak-e-razmandegan.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
