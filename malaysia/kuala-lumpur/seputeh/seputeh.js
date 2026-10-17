// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"seputeh","repository":"asia","path":"malaysia/kuala-lumpur/seputeh","depth":3,"parent":"malaysia/kuala-lumpur","children":["kampong-haji-abdullah-hukum"]});
export const childModules = Object.freeze({"kampong-haji-abdullah-hukum":"./kampong-haji-abdullah-hukum/kampong-haji-abdullah-hukum.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
