// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"bat-khela","repository":"asia","path":"pakistan/khyber-pakhtunkhwa/bat-khela","depth":3,"parent":"pakistan/khyber-pakhtunkhwa","children":["baba"]});
export const childModules = Object.freeze({"baba":"./baba/baba.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
