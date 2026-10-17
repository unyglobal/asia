// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"mahallat","repository":"asia","path":"iran/markazi/mahallat","depth":3,"parent":"iran/markazi","children":["mahalleh-ye-gusheh"]});
export const childModules = Object.freeze({"mahalleh-ye-gusheh":"./mahalleh-ye-gusheh/mahalleh-ye-gusheh.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
