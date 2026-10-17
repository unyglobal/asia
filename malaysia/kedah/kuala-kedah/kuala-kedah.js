// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kuala-kedah","repository":"asia","path":"malaysia/kedah/kuala-kedah","depth":3,"parent":"malaysia/kedah","children":["kampong-kedah"]});
export const childModules = Object.freeze({"kampong-kedah":"./kampong-kedah/kampong-kedah.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
