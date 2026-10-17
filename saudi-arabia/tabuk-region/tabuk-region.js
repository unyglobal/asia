// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"tabuk-region","repository":"asia","path":"saudi-arabia/tabuk-region","depth":2,"parent":"saudi-arabia","children":["al-wajh","duba","tabuk","tayma","umluj"]});
export const childModules = Object.freeze({"al-wajh":"./al-wajh/al-wajh.js","duba":"./duba/duba.js","tabuk":"./tabuk/tabuk.js","tayma":"./tayma/tayma.js","umluj":"./umluj/umluj.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
