// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ahar","repository":"asia","path":"iran/east-azerbaijan/ahar","depth":3,"parent":"iran/east-azerbaijan","children":["kuy-e-farhangian","mahalleh-ye-dalakabad","masjed-dakan-lar"]});
export const childModules = Object.freeze({"kuy-e-farhangian":"./kuy-e-farhangian/kuy-e-farhangian.js","mahalleh-ye-dalakabad":"./mahalleh-ye-dalakabad/mahalleh-ye-dalakabad.js","masjed-dakan-lar":"./masjed-dakan-lar/masjed-dakan-lar.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
