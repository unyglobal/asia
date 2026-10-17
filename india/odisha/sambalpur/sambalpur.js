// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"sambalpur","repository":"asia","path":"india/odisha/sambalpur","depth":3,"parent":"india/odisha","children":["sidhesarmerna"]});
export const childModules = Object.freeze({"sidhesarmerna":"./sidhesarmerna/sidhesarmerna.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
