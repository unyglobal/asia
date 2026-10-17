// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"moriguchi","repository":"asia","path":"japan/osaka/moriguchi","depth":3,"parent":"japan/osaka","children":["babacho","hamamachi","hiyoshicho","jinaicho","kaneshitacho","kikusuidori","omiyadori","saigodori","takasecho","tatsutadori","tokocho"]});
export const childModules = Object.freeze({"babacho":"./babacho/babacho.js","hamamachi":"./hamamachi/hamamachi.js","hiyoshicho":"./hiyoshicho/hiyoshicho.js","jinaicho":"./jinaicho/jinaicho.js","kaneshitacho":"./kaneshitacho/kaneshitacho.js","kikusuidori":"./kikusuidori/kikusuidori.js","omiyadori":"./omiyadori/omiyadori.js","saigodori":"./saigodori/saigodori.js","takasecho":"./takasecho/takasecho.js","tatsutadori":"./tatsutadori/tatsutadori.js","tokocho":"./tokocho/tokocho.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
