// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"deir-ez-zor","repository":"asia","path":"syria/deir-ez-zor","depth":2,"parent":"syria","children":["al-mayadin","albu-kamal","hajin","subaykhan"]});
export const childModules = Object.freeze({"al-mayadin":"./al-mayadin/al-mayadin.js","albu-kamal":"./albu-kamal/albu-kamal.js","hajin":"./hajin/hajin.js","subaykhan":"./subaykhan/subaykhan.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
