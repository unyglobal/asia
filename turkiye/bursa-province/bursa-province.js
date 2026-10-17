// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"bursa-province","repository":"asia","path":"turkiye/bursa-province","depth":2,"parent":"turkiye","children":["bursa","gemlik","gorukle","gursu","inegol","iznik","karacabey","mudanya","mustafakemalpasa","nilufer","orhangazi"]});
export const childModules = Object.freeze({"bursa":"./bursa/bursa.js","gemlik":"./gemlik/gemlik.js","gorukle":"./gorukle/gorukle.js","gursu":"./gursu/gursu.js","inegol":"./inegol/inegol.js","iznik":"./iznik/iznik.js","karacabey":"./karacabey/karacabey.js","mudanya":"./mudanya/mudanya.js","mustafakemalpasa":"./mustafakemalpasa/mustafakemalpasa.js","nilufer":"./nilufer/nilufer.js","orhangazi":"./orhangazi/orhangazi.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
