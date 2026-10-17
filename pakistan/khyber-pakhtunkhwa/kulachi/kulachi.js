// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kulachi","repository":"asia","path":"pakistan/khyber-pakhtunkhwa/kulachi","depth":3,"parent":"pakistan/khyber-pakhtunkhwa","children":["ranazai","zarni-khel"]});
export const childModules = Object.freeze({"ranazai":"./ranazai/ranazai.js","zarni-khel":"./zarni-khel/zarni-khel.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
