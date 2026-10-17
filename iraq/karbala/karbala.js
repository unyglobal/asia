// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"karbala","repository":"asia","path":"iraq/karbala","depth":2,"parent":"iraq","children":["al-hindiyah"]});
export const childModules = Object.freeze({"al-hindiyah":"./al-hindiyah/al-hindiyah.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
