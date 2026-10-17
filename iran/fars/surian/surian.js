// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"surian","repository":"asia","path":"iran/fars/surian","depth":3,"parent":"iran/fars","children":["mahalleh-ye-kazrun","mahalleh-ye-qoliha","mahalleh-ye-talebi"]});
export const childModules = Object.freeze({"mahalleh-ye-kazrun":"./mahalleh-ye-kazrun/mahalleh-ye-kazrun.js","mahalleh-ye-qoliha":"./mahalleh-ye-qoliha/mahalleh-ye-qoliha.js","mahalleh-ye-talebi":"./mahalleh-ye-talebi/mahalleh-ye-talebi.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
