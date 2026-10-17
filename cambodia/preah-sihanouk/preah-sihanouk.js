// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"preah-sihanouk","repository":"asia","path":"cambodia/preah-sihanouk","depth":2,"parent":"cambodia","children":["sihanoukville"]});
export const childModules = Object.freeze({"sihanoukville":"./sihanoukville/sihanoukville.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
