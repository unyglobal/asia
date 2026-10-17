// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"najaf","repository":"asia","path":"iraq/najaf","depth":2,"parent":"iraq","children":["al-mishkhab","kufa"]});
export const childModules = Object.freeze({"al-mishkhab":"./al-mishkhab/al-mishkhab.js","kufa":"./kufa/kufa.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
