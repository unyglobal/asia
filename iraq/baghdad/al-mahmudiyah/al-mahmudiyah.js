// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"al-mahmudiyah","repository":"asia","path":"iraq/baghdad/al-mahmudiyah","depth":3,"parent":"iraq/baghdad","children":["arba-at-ashar-ramadan","hayy-al-murtada","hayy-al-muwazzafin","hayy-as-saray"]});
export const childModules = Object.freeze({"arba-at-ashar-ramadan":"./arba-at-ashar-ramadan/arba-at-ashar-ramadan.js","hayy-al-murtada":"./hayy-al-murtada/hayy-al-murtada.js","hayy-al-muwazzafin":"./hayy-al-muwazzafin/hayy-al-muwazzafin.js","hayy-as-saray":"./hayy-as-saray/hayy-as-saray.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
