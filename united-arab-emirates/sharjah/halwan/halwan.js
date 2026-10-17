// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"halwan","repository":"asia","path":"united-arab-emirates/sharjah/halwan","depth":3,"parent":"united-arab-emirates/sharjah","children":["al-abar","al-aber","al-ghuhaiba","dasman","samnan"]});
export const childModules = Object.freeze({"al-abar":"./al-abar/al-abar.js","al-aber":"./al-aber/al-aber.js","al-ghuhaiba":"./al-ghuhaiba/al-ghuhaiba.js","dasman":"./dasman/dasman.js","samnan":"./samnan/samnan.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
