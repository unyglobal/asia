// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"idlib","repository":"asia","path":"syria/idlib","depth":2,"parent":"syria","children":["ad-dana","binnish","jisr-ash-shughur","kafr-takharim","kafranbel","khan-shaykhun","ma-arratmisrin","salqin","saraqib"]});
export const childModules = Object.freeze({"ad-dana":"./ad-dana/ad-dana.js","binnish":"./binnish/binnish.js","jisr-ash-shughur":"./jisr-ash-shughur/jisr-ash-shughur.js","kafr-takharim":"./kafr-takharim/kafr-takharim.js","kafranbel":"./kafranbel/kafranbel.js","khan-shaykhun":"./khan-shaykhun/khan-shaykhun.js","ma-arratmisrin":"./ma-arratmisrin/ma-arratmisrin.js","salqin":"./salqin/salqin.js","saraqib":"./saraqib/saraqib.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
