// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"autonomous-region-in-muslim-mindanao","repository":"asia","path":"philippines/autonomous-region-in-muslim-mindanao","depth":2,"parent":"philippines","children":["al-barka","bongao","budta","buluan","city-of-isabela","cotabato","dinaig","general-salipada-k-pendatun","jolo","maganoy","maluso","marawi-city","pagalungan","parang","sitangkai","sultan-kudarat","sultan-sa-barongis","talitay","wao"]});
export const childModules = Object.freeze({"al-barka":"./al-barka/al-barka.js","bongao":"./bongao/bongao.js","budta":"./budta/budta.js","buluan":"./buluan/buluan.js","city-of-isabela":"./city-of-isabela/city-of-isabela.js","cotabato":"./cotabato/cotabato.js","dinaig":"./dinaig/dinaig.js","general-salipada-k-pendatun":"./general-salipada-k-pendatun/general-salipada-k-pendatun.js","jolo":"./jolo/jolo.js","maganoy":"./maganoy/maganoy.js","maluso":"./maluso/maluso.js","marawi-city":"./marawi-city/marawi-city.js","pagalungan":"./pagalungan/pagalungan.js","parang":"./parang/parang.js","sitangkai":"./sitangkai/sitangkai.js","sultan-kudarat":"./sultan-kudarat/sultan-kudarat.js","sultan-sa-barongis":"./sultan-sa-barongis/sultan-sa-barongis.js","talitay":"./talitay/talitay.js","wao":"./wao/wao.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
