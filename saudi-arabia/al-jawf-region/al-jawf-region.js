// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"al-jawf-region","repository":"asia","path":"saudi-arabia/al-jawf-region","depth":2,"parent":"saudi-arabia","children":["haql","qurayyat","sakakah","tubarjal"]});
export const childModules = Object.freeze({"haql":"./haql/haql.js","qurayyat":"./qurayyat/qurayyat.js","sakakah":"./sakakah/sakakah.js","tubarjal":"./tubarjal/tubarjal.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
