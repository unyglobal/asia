// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"bundu","repository":"asia","path":"india/jharkhand/bundu","depth":3,"parent":"india/jharkhand","children":["kumhaltoli","manjhitoli","tangartoli"]});
export const childModules = Object.freeze({"kumhaltoli":"./kumhaltoli/kumhaltoli.js","manjhitoli":"./manjhitoli/manjhitoli.js","tangartoli":"./tangartoli/tangartoli.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
