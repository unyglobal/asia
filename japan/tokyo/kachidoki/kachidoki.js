// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kachidoki","repository":"asia","path":"japan/tokyo/kachidoki","depth":3,"parent":"japan/tokyo","children":["harumi","tsukiji","tsukishima"]});
export const childModules = Object.freeze({"harumi":"./harumi/harumi.js","tsukiji":"./tsukiji/tsukiji.js","tsukishima":"./tsukishima/tsukishima.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
