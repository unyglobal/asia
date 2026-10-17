// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"gerash","repository":"asia","path":"iran/fars/gerash","depth":3,"parent":"iran/fars","children":["mahalleh-ye-bideleh","mahalleh-ye-nasak","mahalleh-ye-robat"]});
export const childModules = Object.freeze({"mahalleh-ye-bideleh":"./mahalleh-ye-bideleh/mahalleh-ye-bideleh.js","mahalleh-ye-nasak":"./mahalleh-ye-nasak/mahalleh-ye-nasak.js","mahalleh-ye-robat":"./mahalleh-ye-robat/mahalleh-ye-robat.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
