// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"naryn-region","repository":"asia","path":"kyrgyzstan/naryn-region","depth":2,"parent":"kyrgyzstan","children":["naryn"]});
export const childModules = Object.freeze({"naryn":"./naryn/naryn.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
