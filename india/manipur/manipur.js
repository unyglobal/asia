// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"manipur","repository":"asia","path":"india/manipur","depth":2,"parent":"india","children":["churachandpur","imphal","kakching","keirao-bitra","mayang-imphal","moirang","moreh","nambol","phek","samurou","tamenglong","thoubal","ukhrul"]});
export const childModules = Object.freeze({"churachandpur":"./churachandpur/churachandpur.js","imphal":"./imphal/imphal.js","kakching":"./kakching/kakching.js","keirao-bitra":"./keirao-bitra/keirao-bitra.js","mayang-imphal":"./mayang-imphal/mayang-imphal.js","moirang":"./moirang/moirang.js","moreh":"./moreh/moreh.js","nambol":"./nambol/nambol.js","phek":"./phek/phek.js","samurou":"./samurou/samurou.js","tamenglong":"./tamenglong/tamenglong.js","thoubal":"./thoubal/thoubal.js","ukhrul":"./ukhrul/ukhrul.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
