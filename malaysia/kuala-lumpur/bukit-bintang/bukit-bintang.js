// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"bukit-bintang","repository":"asia","path":"malaysia/kuala-lumpur/bukit-bintang","depth":3,"parent":"malaysia/kuala-lumpur","children":["kampong-dollah"]});
export const childModules = Object.freeze({"kampong-dollah":"./kampong-dollah/kampong-dollah.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
