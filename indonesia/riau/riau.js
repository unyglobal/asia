// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"riau","repository":"asia","path":"indonesia/riau","depth":2,"parent":"indonesia","children":["balai-pungut","batam","dumai","pekanbaru"]});
export const childModules = Object.freeze({"balai-pungut":"./balai-pungut/balai-pungut.js","batam":"./batam/batam.js","dumai":"./dumai/dumai.js","pekanbaru":"./pekanbaru/pekanbaru.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
