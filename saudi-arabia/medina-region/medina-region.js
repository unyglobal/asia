// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"medina-region","repository":"asia","path":"saudi-arabia/medina-region","depth":2,"parent":"saudi-arabia","children":["al-ula","badr-hunayn","madinah","mahd-adh-dhahab","sultanah","yanbu"]});
export const childModules = Object.freeze({"al-ula":"./al-ula/al-ula.js","badr-hunayn":"./badr-hunayn/badr-hunayn.js","madinah":"./madinah/madinah.js","mahd-adh-dhahab":"./mahd-adh-dhahab/mahd-adh-dhahab.js","sultanah":"./sultanah/sultanah.js","yanbu":"./yanbu/yanbu.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
