// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"tayu","repository":"asia","path":"indonesia/central-java/tayu","depth":3,"parent":"indonesia/central-java","children":["krajan-tayu-wetan"]});
export const childModules = Object.freeze({"krajan-tayu-wetan":"./krajan-tayu-wetan/krajan-tayu-wetan.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
