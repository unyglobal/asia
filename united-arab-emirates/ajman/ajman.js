// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ajman","repository":"asia","path":"united-arab-emirates/ajman","depth":2,"parent":"united-arab-emirates","children":["al-hamidiyah","al-jurf","ar-rumaylah"]});
export const childModules = Object.freeze({"al-hamidiyah":"./al-hamidiyah/al-hamidiyah.js","al-jurf":"./al-jurf/al-jurf.js","ar-rumaylah":"./ar-rumaylah/ar-rumaylah.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
