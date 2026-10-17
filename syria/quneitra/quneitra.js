// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"quneitra","repository":"asia","path":"syria/quneitra","depth":2,"parent":"syria","children":["al-qunaytirah"]});
export const childModules = Object.freeze({"al-qunaytirah":"./al-qunaytirah/al-qunaytirah.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
