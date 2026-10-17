// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"babil","repository":"asia","path":"iraq/babil","depth":2,"parent":"iraq","children":["abu-gharaq","al-hillah","al-mahawil","al-musayab","al-qasim","nahiyat-al-iskandariyah","saddat-al-hindiyah"]});
export const childModules = Object.freeze({"abu-gharaq":"./abu-gharaq/abu-gharaq.js","al-hillah":"./al-hillah/al-hillah.js","al-mahawil":"./al-mahawil/al-mahawil.js","al-musayab":"./al-musayab/al-musayab.js","al-qasim":"./al-qasim/al-qasim.js","nahiyat-al-iskandariyah":"./nahiyat-al-iskandariyah/nahiyat-al-iskandariyah.js","saddat-al-hindiyah":"./saddat-al-hindiyah/saddat-al-hindiyah.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
