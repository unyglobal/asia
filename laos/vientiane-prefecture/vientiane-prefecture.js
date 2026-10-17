// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"vientiane-prefecture","repository":"asia","path":"laos/vientiane-prefecture","depth":2,"parent":"laos","children":["vientiane"]});
export const childModules = Object.freeze({"vientiane":"./vientiane/vientiane.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
