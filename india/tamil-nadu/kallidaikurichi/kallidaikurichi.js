// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kallidaikurichi","repository":"asia","path":"india/tamil-nadu/kallidaikurichi","depth":3,"parent":"india/tamil-nadu","children":["melmukasankudi","tulukkakkudi","vadakku-kallidaikurichi"]});
export const childModules = Object.freeze({"melmukasankudi":"./melmukasankudi/melmukasankudi.js","tulukkakkudi":"./tulukkakkudi/tulukkakkudi.js","vadakku-kallidaikurichi":"./vadakku-kallidaikurichi/vadakku-kallidaikurichi.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
