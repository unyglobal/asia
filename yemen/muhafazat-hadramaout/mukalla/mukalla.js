// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"mukalla","repository":"asia","path":"yemen/muhafazat-hadramaout/mukalla","depth":3,"parent":"yemen/muhafazat-hadramaout","children":["hayy-al-badiri","hayy-al-ummal","hayy-ba-abbud","hayy-ghar-al-ahmar","hayy-uktubir","wahdat-abd-al-bari"]});
export const childModules = Object.freeze({"hayy-al-badiri":"./hayy-al-badiri/hayy-al-badiri.js","hayy-al-ummal":"./hayy-al-ummal/hayy-al-ummal.js","hayy-ba-abbud":"./hayy-ba-abbud/hayy-ba-abbud.js","hayy-ghar-al-ahmar":"./hayy-ghar-al-ahmar/hayy-ghar-al-ahmar.js","hayy-uktubir":"./hayy-uktubir/hayy-uktubir.js","wahdat-abd-al-bari":"./wahdat-abd-al-bari/wahdat-abd-al-bari.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
