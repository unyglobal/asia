// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"sabzevar","repository":"asia","path":"iran/razavi-khorasan/sabzevar","depth":3,"parent":"iran/razavi-khorasan","children":["mahalleh-ye-najjarabad"]});
export const childModules = Object.freeze({"mahalleh-ye-najjarabad":"./mahalleh-ye-najjarabad/mahalleh-ye-najjarabad.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
