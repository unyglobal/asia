// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"rasht","repository":"asia","path":"iran/gilan-province/rasht","depth":3,"parent":"iran/gilan-province","children":["mahalleh-ye-saghari-sazan"]});
export const childModules = Object.freeze({"mahalleh-ye-saghari-sazan":"./mahalleh-ye-saghari-sazan/mahalleh-ye-saghari-sazan.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
