// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kawaguchi","repository":"asia","path":"japan/saitama/kawaguchi","depth":3,"parent":"japan/saitama","children":["saiwaicho"]});
export const childModules = Object.freeze({"saiwaicho":"./saiwaicho/saiwaicho.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
