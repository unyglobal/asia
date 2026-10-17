// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"vientiane","repository":"asia","path":"laos/vientiane-prefecture/vientiane","depth":3,"parent":"laos/vientiane-prefecture","children":["vang-vieng"]});
export const childModules = Object.freeze({"vang-vieng":"./vang-vieng/vang-vieng.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
