// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"matli","repository":"asia","path":"pakistan/sindh/matli","depth":3,"parent":"pakistan/sindh","children":["kahmiri-mohallah"]});
export const childModules = Object.freeze({"kahmiri-mohallah":"./kahmiri-mohallah/kahmiri-mohallah.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
