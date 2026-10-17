// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"al-jahra-governorate","repository":"asia","path":"kuwait/al-jahra-governorate","depth":2,"parent":"kuwait","children":["al-jahra"]});
export const childModules = Object.freeze({"al-jahra":"./al-jahra/al-jahra.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
