// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"konosu","repository":"asia","path":"japan/saitama/konosu","depth":3,"parent":"japan/saitama","children":["higashi","kami","miyaji","tenjin"]});
export const childModules = Object.freeze({"higashi":"./higashi/higashi.js","kami":"./kami/kami.js","miyaji":"./miyaji/miyaji.js","tenjin":"./tenjin/tenjin.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
