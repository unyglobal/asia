// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"saga","repository":"asia","path":"japan/saga","depth":2,"parent":"japan","children":["arita","higashigo","imaricho-ko","ishinari","kanzakimachi-kanzaki","karatsu","kashima","nakatsukuma","sonobe","takeo","taku","tosu","ureshinomachi-shimojuku"]});
export const childModules = Object.freeze({"arita":"./arita/arita.js","higashigo":"./higashigo/higashigo.js","imaricho-ko":"./imaricho-ko/imaricho-ko.js","ishinari":"./ishinari/ishinari.js","kanzakimachi-kanzaki":"./kanzakimachi-kanzaki/kanzakimachi-kanzaki.js","karatsu":"./karatsu/karatsu.js","kashima":"./kashima/kashima.js","nakatsukuma":"./nakatsukuma/nakatsukuma.js","sonobe":"./sonobe/sonobe.js","takeo":"./takeo/takeo.js","taku":"./taku/taku.js","tosu":"./tosu/tosu.js","ureshinomachi-shimojuku":"./ureshinomachi-shimojuku/ureshinomachi-shimojuku.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
