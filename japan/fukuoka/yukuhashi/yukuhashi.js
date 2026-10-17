// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"yukuhashi","repository":"asia","path":"japan/fukuoka/yukuhashi","depth":3,"parent":"japan/fukuoka","children":["minamiohashi"]});
export const childModules = Object.freeze({"minamiohashi":"./minamiohashi/minamiohashi.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
