// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"bengkulu","repository":"asia","path":"indonesia/bengkulu","depth":2,"parent":"indonesia","children":["curup"]});
export const childModules = Object.freeze({"curup":"./curup/curup.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
