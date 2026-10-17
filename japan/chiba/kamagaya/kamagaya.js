// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kamagaya","repository":"asia","path":"japan/chiba/kamagaya","depth":3,"parent":"japan/chiba","children":["chuo","minamihatsutomi","tomioka"]});
export const childModules = Object.freeze({"chuo":"./chuo/chuo.js","minamihatsutomi":"./minamihatsutomi/minamihatsutomi.js","tomioka":"./tomioka/tomioka.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
