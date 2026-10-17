// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"hawalli","repository":"asia","path":"kuwait/hawalli","depth":2,"parent":"kuwait","children":["ar-rumaythiyah","as-salimiyah","bayan","salwa"]});
export const childModules = Object.freeze({"ar-rumaythiyah":"./ar-rumaythiyah/ar-rumaythiyah.js","as-salimiyah":"./as-salimiyah/as-salimiyah.js","bayan":"./bayan/bayan.js","salwa":"./salwa/salwa.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
