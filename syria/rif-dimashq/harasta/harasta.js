// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"harasta","repository":"asia","path":"syria/rif-dimashq/harasta","depth":3,"parent":"syria/rif-dimashq","children":["arwakah","hayy-al-baydar","hayy-al-maqlab","hayy-as-sa-diyah","hayy-as-sayl","hayy-at-taghrah","hayy-ath-thanubah"]});
export const childModules = Object.freeze({"arwakah":"./arwakah/arwakah.js","hayy-al-baydar":"./hayy-al-baydar/hayy-al-baydar.js","hayy-al-maqlab":"./hayy-al-maqlab/hayy-al-maqlab.js","hayy-as-sa-diyah":"./hayy-as-sa-diyah/hayy-as-sa-diyah.js","hayy-as-sayl":"./hayy-as-sayl/hayy-as-sayl.js","hayy-at-taghrah":"./hayy-at-taghrah/hayy-at-taghrah.js","hayy-ath-thanubah":"./hayy-ath-thanubah/hayy-ath-thanubah.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
