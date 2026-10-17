// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"oudomxai","repository":"asia","path":"laos/oudomxai","depth":2,"parent":"laos","children":["muang-xay"]});
export const childModules = Object.freeze({"muang-xay":"./muang-xay/muang-xay.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
