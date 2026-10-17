// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ayn-al-arab","repository":"asia","path":"syria/aleppo/ayn-al-arab","depth":3,"parent":"syria/aleppo","children":["botan","kaniya-kurdan","suq-al-hal","tarmik-girshi"]});
export const childModules = Object.freeze({"botan":"./botan/botan.js","kaniya-kurdan":"./kaniya-kurdan/kaniya-kurdan.js","suq-al-hal":"./suq-al-hal/suq-al-hal.js","tarmik-girshi":"./tarmik-girshi/tarmik-girshi.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
