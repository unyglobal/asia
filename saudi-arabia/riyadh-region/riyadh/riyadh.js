// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"riyadh","repository":"asia","path":"saudi-arabia/riyadh-region/riyadh","depth":3,"parent":"saudi-arabia/riyadh-region","children":["az-zahra"]});
export const childModules = Object.freeze({"az-zahra":"./az-zahra/az-zahra.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
