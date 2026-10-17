// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"syunik","repository":"asia","path":"armenia/syunik","depth":2,"parent":"armenia","children":["goris","kapan"]});
export const childModules = Object.freeze({"goris":"./goris/goris.js","kapan":"./kapan/kapan.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
