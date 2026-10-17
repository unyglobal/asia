// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"khonj","repository":"asia","path":"iran/fars/khonj","depth":3,"parent":"iran/fars","children":["mahalleh-ye-azadegan","sheykh-sho-eyb"]});
export const childModules = Object.freeze({"mahalleh-ye-azadegan":"./mahalleh-ye-azadegan/mahalleh-ye-azadegan.js","sheykh-sho-eyb":"./sheykh-sho-eyb/sheykh-sho-eyb.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
