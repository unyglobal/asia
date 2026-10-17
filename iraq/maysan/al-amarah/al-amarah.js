// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"al-amarah","repository":"asia","path":"iraq/maysan/al-amarah","depth":3,"parent":"iraq/maysan","children":["al-iskan","al-mu-allimin","al-qahirah"]});
export const childModules = Object.freeze({"al-iskan":"./al-iskan/al-iskan.js","al-mu-allimin":"./al-mu-allimin/al-mu-allimin.js","al-qahirah":"./al-qahirah/al-qahirah.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
