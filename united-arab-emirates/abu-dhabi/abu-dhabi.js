// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"abu-dhabi","repository":"asia","path":"united-arab-emirates/abu-dhabi","depth":2,"parent":"united-arab-emirates","children":["al-ain-city","al-shamkhah-city","ar-ruways","bani-yas-city","khalifah-a-city","mohammed-bin-zayed-city","musaffah","zayed-city"]});
export const childModules = Object.freeze({"al-ain-city":"./al-ain-city/al-ain-city.js","al-shamkhah-city":"./al-shamkhah-city/al-shamkhah-city.js","ar-ruways":"./ar-ruways/ar-ruways.js","bani-yas-city":"./bani-yas-city/bani-yas-city.js","khalifah-a-city":"./khalifah-a-city/khalifah-a-city.js","mohammed-bin-zayed-city":"./mohammed-bin-zayed-city/mohammed-bin-zayed-city.js","musaffah":"./musaffah/musaffah.js","zayed-city":"./zayed-city/zayed-city.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
