// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"basrah","repository":"asia","path":"iraq/basra/basrah","depth":3,"parent":"iraq/basra","children":["al-asma-i","al-iskan"]});
export const childModules = Object.freeze({"al-asma-i":"./al-asma-i/al-asma-i.js","al-iskan":"./al-iskan/al-iskan.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
