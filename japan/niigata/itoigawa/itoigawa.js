// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"itoigawa","repository":"asia","path":"japan/niigata/itoigawa","depth":3,"parent":"japan/niigata","children":["minamiterajima","uekari"]});
export const childModules = Object.freeze({"minamiterajima":"./minamiterajima/minamiterajima.js","uekari":"./uekari/uekari.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
