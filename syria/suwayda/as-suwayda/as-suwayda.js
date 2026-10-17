// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"as-suwayda","repository":"asia","path":"syria/suwayda/as-suwayda","depth":3,"parent":"syria/suwayda","children":["hayy-al-fursan","hayy-al-istiqlal","hayy-al-jihad","hayy-ash-shuhada"]});
export const childModules = Object.freeze({"hayy-al-fursan":"./hayy-al-fursan/hayy-al-fursan.js","hayy-al-istiqlal":"./hayy-al-istiqlal/hayy-al-istiqlal.js","hayy-al-jihad":"./hayy-al-jihad/hayy-al-jihad.js","hayy-ash-shuhada":"./hayy-ash-shuhada/hayy-ash-shuhada.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
