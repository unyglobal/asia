// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ahal","repository":"asia","path":"turkmenistan/ahal","depth":2,"parent":"turkmenistan","children":["abadan","anew","baherden","gami","gokdepe","kaka","sarahs","tejen"]});
export const childModules = Object.freeze({"abadan":"./abadan/abadan.js","anew":"./anew/anew.js","baherden":"./baherden/baherden.js","gami":"./gami/gami.js","gokdepe":"./gokdepe/gokdepe.js","kaka":"./kaka/kaka.js","sarahs":"./sarahs/sarahs.js","tejen":"./tejen/tejen.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
