// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"northern-borders-region","repository":"asia","path":"saudi-arabia/northern-borders-region","depth":2,"parent":"saudi-arabia","children":["arar","turaif","turayf"]});
export const childModules = Object.freeze({"arar":"./arar/arar.js","turaif":"./turaif/turaif.js","turayf":"./turayf/turayf.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
