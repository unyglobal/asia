// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"jidd-hafs","repository":"asia","path":"bahrain/manama/jidd-hafs","depth":3,"parent":"bahrain/manama","children":["al-adliyah","as-salihiyah","jabalat-al-burhamah","marwazan","tashshan"]});
export const childModules = Object.freeze({"al-adliyah":"./al-adliyah/al-adliyah.js","as-salihiyah":"./as-salihiyah/as-salihiyah.js","jabalat-al-burhamah":"./jabalat-al-burhamah/jabalat-al-burhamah.js","marwazan":"./marwazan/marwazan.js","tashshan":"./tashshan/tashshan.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
