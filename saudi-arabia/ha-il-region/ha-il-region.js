// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ha-il-region","repository":"asia","path":"saudi-arabia/ha-il-region","depth":2,"parent":"saudi-arabia","children":["baq-a","ha-il","turubah"]});
export const childModules = Object.freeze({"baq-a":"./baq-a/baq-a.js","ha-il":"./ha-il/ha-il.js","turubah":"./turubah/turubah.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
