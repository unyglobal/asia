// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"muthanna","repository":"asia","path":"iraq/muthanna","depth":2,"parent":"iraq","children":["ar-rumaythah","as-samawah"]});
export const childModules = Object.freeze({"ar-rumaythah":"./ar-rumaythah/ar-rumaythah.js","as-samawah":"./as-samawah/as-samawah.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
