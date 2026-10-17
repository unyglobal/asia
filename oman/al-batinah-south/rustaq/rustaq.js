// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"rustaq","repository":"asia","path":"oman/al-batinah-south/rustaq","depth":3,"parent":"oman/al-batinah-south","children":["ayniyah","bayt-al-qarn","dahiz","tawi-an-nazwani","tawi-thani"]});
export const childModules = Object.freeze({"ayniyah":"./ayniyah/ayniyah.js","bayt-al-qarn":"./bayt-al-qarn/bayt-al-qarn.js","dahiz":"./dahiz/dahiz.js","tawi-an-nazwani":"./tawi-an-nazwani/tawi-an-nazwani.js","tawi-thani":"./tawi-thani/tawi-thani.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
