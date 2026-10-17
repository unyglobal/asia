// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"dhi-qar","repository":"asia","path":"iraq/dhi-qar","depth":2,"parent":"iraq","children":["ash-shatrah","nahiyat-al-fuhud","nasiriyah","qal-at-sukkar"]});
export const childModules = Object.freeze({"ash-shatrah":"./ash-shatrah/ash-shatrah.js","nahiyat-al-fuhud":"./nahiyat-al-fuhud/nahiyat-al-fuhud.js","nasiriyah":"./nasiriyah/nasiriyah.js","qal-at-sukkar":"./qal-at-sukkar/qal-at-sukkar.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
