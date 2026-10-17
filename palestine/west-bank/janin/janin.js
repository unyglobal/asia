// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"janin","repository":"asia","path":"palestine/west-bank/janin","depth":3,"parent":"palestine/west-bank","children":["al-baldah-al-qadimah","hayy-al-basatin-ash-shamaliyah","hayy-al-hawakir","hayy-al-marah","hayy-as-saraya","hayy-bab-al-wad","hayy-nahr-al-muqatta","hayy-wad-bal-amah"]});
export const childModules = Object.freeze({"al-baldah-al-qadimah":"./al-baldah-al-qadimah/al-baldah-al-qadimah.js","hayy-al-basatin-ash-shamaliyah":"./hayy-al-basatin-ash-shamaliyah/hayy-al-basatin-ash-shamaliyah.js","hayy-al-hawakir":"./hayy-al-hawakir/hayy-al-hawakir.js","hayy-al-marah":"./hayy-al-marah/hayy-al-marah.js","hayy-as-saraya":"./hayy-as-saraya/hayy-as-saraya.js","hayy-bab-al-wad":"./hayy-bab-al-wad/hayy-bab-al-wad.js","hayy-nahr-al-muqatta":"./hayy-nahr-al-muqatta/hayy-nahr-al-muqatta.js","hayy-wad-bal-amah":"./hayy-wad-bal-amah/hayy-wad-bal-amah.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
