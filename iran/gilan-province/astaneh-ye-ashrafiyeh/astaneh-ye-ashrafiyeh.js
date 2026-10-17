// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"astaneh-ye-ashrafiyeh","repository":"asia","path":"iran/gilan-province/astaneh-ye-ashrafiyeh","depth":3,"parent":"iran/gilan-province","children":["hoseynabad"]});
export const childModules = Object.freeze({"hoseynabad":"./hoseynabad/hoseynabad.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
