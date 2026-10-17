// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"jeddah","repository":"asia","path":"saudi-arabia/mecca-region/jeddah","depth":3,"parent":"saudi-arabia/mecca-region","children":["al-ammariyah","al-baghdadiyah-al-gharbiyah","al-balad","as-sahifah"]});
export const childModules = Object.freeze({"al-ammariyah":"./al-ammariyah/al-ammariyah.js","al-baghdadiyah-al-gharbiyah":"./al-baghdadiyah-al-gharbiyah/al-baghdadiyah-al-gharbiyah.js","al-balad":"./al-balad/al-balad.js","as-sahifah":"./as-sahifah/as-sahifah.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
