// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kuwait","repository":"asia","path":"kuwait","depth":1,"parent":"","children":["al-ahmadi","al-asimah","al-farwaniyah","al-jahra-governorate","hawalli","mubarak-al-kabir"]});
export const childModules = Object.freeze({"al-ahmadi":"./al-ahmadi/al-ahmadi.js","al-asimah":"./al-asimah/al-asimah.js","al-farwaniyah":"./al-farwaniyah/al-farwaniyah.js","al-jahra-governorate":"./al-jahra-governorate/al-jahra-governorate.js","hawalli":"./hawalli/hawalli.js","mubarak-al-kabir":"./mubarak-al-kabir/mubarak-al-kabir.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
