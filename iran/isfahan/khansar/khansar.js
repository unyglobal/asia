// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"khansar","repository":"asia","path":"iran/isfahan/khansar","depth":3,"parent":"iran/isfahan","children":["mahalleh-ye-jurcheh","mahalleh-ye-manzariyeh","shahrak-e-shahed"]});
export const childModules = Object.freeze({"mahalleh-ye-jurcheh":"./mahalleh-ye-jurcheh/mahalleh-ye-jurcheh.js","mahalleh-ye-manzariyeh":"./mahalleh-ye-manzariyeh/mahalleh-ye-manzariyeh.js","shahrak-e-shahed":"./shahrak-e-shahed/shahrak-e-shahed.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
