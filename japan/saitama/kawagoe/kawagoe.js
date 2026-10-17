// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kawagoe","repository":"asia","path":"japan/saitama/kawagoe","depth":3,"parent":"japan/saitama","children":["wakita"]});
export const childModules = Object.freeze({"wakita":"./wakita/wakita.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
