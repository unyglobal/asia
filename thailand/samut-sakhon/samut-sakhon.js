// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"samut-sakhon","repository":"asia","path":"thailand/samut-sakhon","depth":2,"parent":"thailand","children":["ban-phaeo","krathum-baen"]});
export const childModules = Object.freeze({"ban-phaeo":"./ban-phaeo/ban-phaeo.js","krathum-baen":"./krathum-baen/krathum-baen.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
