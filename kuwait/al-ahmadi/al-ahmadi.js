// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"al-ahmadi","repository":"asia","path":"kuwait/al-ahmadi","depth":2,"parent":"kuwait","children":["al-fahahil","al-fintas","al-mahbulah","al-manqaf","ar-riqqah"]});
export const childModules = Object.freeze({"al-fahahil":"./al-fahahil/al-fahahil.js","al-fintas":"./al-fintas/al-fintas.js","al-mahbulah":"./al-mahbulah/al-mahbulah.js","al-manqaf":"./al-manqaf/al-manqaf.js","ar-riqqah":"./ar-riqqah/ar-riqqah.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
