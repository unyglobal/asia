// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"irbin","repository":"asia","path":"syria/rif-dimashq/irbin","depth":3,"parent":"syria/rif-dimashq","children":["harat-as-sarut","hayy-al-hawazah","hayy-al-wazz"]});
export const childModules = Object.freeze({"harat-as-sarut":"./harat-as-sarut/harat-as-sarut.js","hayy-al-hawazah":"./hayy-al-hawazah/hayy-al-hawazah.js","hayy-al-wazz":"./hayy-al-wazz/hayy-al-wazz.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
