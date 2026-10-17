// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"yawatahama","repository":"asia","path":"japan/ehime/yawatahama","depth":3,"parent":"japan/ehime","children":["furumachi","hirose","otaniguchi"]});
export const childModules = Object.freeze({"furumachi":"./furumachi/furumachi.js","hirose":"./hirose/hirose.js","otaniguchi":"./otaniguchi/otaniguchi.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
