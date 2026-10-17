// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"izki","repository":"asia","path":"oman/ad-dakhiliyah/izki","depth":3,"parent":"oman/ad-dakhiliyah","children":["al-alam","al-wudayy","al-yaman","an-nizar"]});
export const childModules = Object.freeze({"al-alam":"./al-alam/al-alam.js","al-wudayy":"./al-wudayy/al-wudayy.js","al-yaman":"./al-yaman/al-yaman.js","an-nizar":"./an-nizar/an-nizar.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
