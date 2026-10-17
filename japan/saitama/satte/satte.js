// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"satte","repository":"asia","path":"japan/saitama/satte","depth":3,"parent":"japan/saitama","children":["higashi","midoridai","naka"]});
export const childModules = Object.freeze({"higashi":"./higashi/higashi.js","midoridai":"./midoridai/midoridai.js","naka":"./naka/naka.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
