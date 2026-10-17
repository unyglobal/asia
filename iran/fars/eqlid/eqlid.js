// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"eqlid","repository":"asia","path":"iran/fars/eqlid","depth":3,"parent":"iran/fars","children":["mahalleh-ye-baghuk","mahalleh-ye-tall-e-bagh"]});
export const childModules = Object.freeze({"mahalleh-ye-baghuk":"./mahalleh-ye-baghuk/mahalleh-ye-baghuk.js","mahalleh-ye-tall-e-bagh":"./mahalleh-ye-tall-e-bagh/mahalleh-ye-tall-e-bagh.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
