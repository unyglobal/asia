// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"tubas","repository":"asia","path":"palestine/west-bank/tubas","depth":3,"parent":"palestine/west-bank","children":["al-aqaba","al-badlah-al-qadimah","al-kaffa","khallet-mahfouz"]});
export const childModules = Object.freeze({"al-aqaba":"./al-aqaba/al-aqaba.js","al-badlah-al-qadimah":"./al-badlah-al-qadimah/al-badlah-al-qadimah.js","al-kaffa":"./al-kaffa/al-kaffa.js","khallet-mahfouz":"./khallet-mahfouz/khallet-mahfouz.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
