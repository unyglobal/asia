// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kofu","repository":"asia","path":"japan/yamanashi/kofu","depth":3,"parent":"japan/yamanashi","children":["tachibanacho"]});
export const childModules = Object.freeze({"tachibanacho":"./tachibanacho/tachibanacho.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
