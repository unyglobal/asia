// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"arar","repository":"asia","path":"saudi-arabia/northern-borders-region/arar","depth":3,"parent":"saudi-arabia/northern-borders-region","children":["al-faysaliyah"]});
export const childModules = Object.freeze({"al-faysaliyah":"./al-faysaliyah/al-faysaliyah.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
