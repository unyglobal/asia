// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ito","repository":"asia","path":"japan/shizuoka/ito","depth":3,"parent":"japan/shizuoka","children":["hirono","sakuragicho"]});
export const childModules = Object.freeze({"hirono":"./hirono/hirono.js","sakuragicho":"./sakuragicho/sakuragicho.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
