// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"southern-governorate","repository":"asia","path":"bahrain/southern-governorate","depth":2,"parent":"bahrain","children":["ar-rifa","dar-kulayb","madinat-isa"]});
export const childModules = Object.freeze({"ar-rifa":"./ar-rifa/ar-rifa.js","dar-kulayb":"./dar-kulayb/dar-kulayb.js","madinat-isa":"./madinat-isa/madinat-isa.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
