// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"mecca-region","repository":"asia","path":"saudi-arabia/mecca-region","depth":2,"parent":"saudi-arabia","children":["al-jumum","al-khurmah","al-lith","ash-shafa","jeddah","khulays","makkah","rabigh","ta-if","thuwal","turabah"]});
export const childModules = Object.freeze({"al-jumum":"./al-jumum/al-jumum.js","al-khurmah":"./al-khurmah/al-khurmah.js","al-lith":"./al-lith/al-lith.js","ash-shafa":"./ash-shafa/ash-shafa.js","jeddah":"./jeddah/jeddah.js","khulays":"./khulays/khulays.js","makkah":"./makkah/makkah.js","rabigh":"./rabigh/rabigh.js","ta-if":"./ta-if/ta-if.js","thuwal":"./thuwal/thuwal.js","turabah":"./turabah/turabah.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
