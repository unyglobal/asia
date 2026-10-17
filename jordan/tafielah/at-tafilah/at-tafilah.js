// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"at-tafilah","repository":"asia","path":"jordan/tafielah/at-tafilah","depth":3,"parent":"jordan/tafielah","children":["hayy-al-bahrat","hayy-al-haddadah","hayy-al-qutayfat","hayy-as-salmah","hayy-umm-qura"]});
export const childModules = Object.freeze({"hayy-al-bahrat":"./hayy-al-bahrat/hayy-al-bahrat.js","hayy-al-haddadah":"./hayy-al-haddadah/hayy-al-haddadah.js","hayy-al-qutayfat":"./hayy-al-qutayfat/hayy-al-qutayfat.js","hayy-as-salmah":"./hayy-as-salmah/hayy-as-salmah.js","hayy-umm-qura":"./hayy-umm-qura/hayy-umm-qura.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
