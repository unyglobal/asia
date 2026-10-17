// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"west-papua","repository":"asia","path":"indonesia/west-papua","depth":2,"parent":"indonesia","children":["bintuni","manokwari","ransiki"]});
export const childModules = Object.freeze({"bintuni":"./bintuni/bintuni.js","manokwari":"./manokwari/manokwari.js","ransiki":"./ransiki/ransiki.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
