// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"muharraq","repository":"asia","path":"bahrain/muharraq","depth":2,"parent":"bahrain","children":["al-muharraq"]});
export const childModules = Object.freeze({"al-muharraq":"./al-muharraq/al-muharraq.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
