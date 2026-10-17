// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"tuyserkan","repository":"asia","path":"iran/hamadan-province/tuyserkan","depth":3,"parent":"iran/hamadan-province","children":["mahalleh-ye-kolur","shahrak-e-farhangian"]});
export const childModules = Object.freeze({"mahalleh-ye-kolur":"./mahalleh-ye-kolur/mahalleh-ye-kolur.js","shahrak-e-farhangian":"./shahrak-e-farhangian/shahrak-e-farhangian.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
