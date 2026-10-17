// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"yaita","repository":"asia","path":"japan/tochigi/yaita","depth":3,"parent":"japan/tochigi","children":["ogicho"]});
export const childModules = Object.freeze({"ogicho":"./ogicho/ogicho.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
