// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"al-batinah-north","repository":"asia","path":"oman/al-batinah-north","depth":2,"parent":"oman","children":["al-khaburah","as-suwayq","liwa","saham","shinas","sohar"]});
export const childModules = Object.freeze({"al-khaburah":"./al-khaburah/al-khaburah.js","as-suwayq":"./as-suwayq/as-suwayq.js","liwa":"./liwa/liwa.js","saham":"./saham/saham.js","shinas":"./shinas/shinas.js","sohar":"./sohar/sohar.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
