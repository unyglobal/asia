// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"rohtak","repository":"asia","path":"india/haryana/rohtak","depth":3,"parent":"india/haryana","children":["mandi"]});
export const childModules = Object.freeze({"mandi":"./mandi/mandi.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
