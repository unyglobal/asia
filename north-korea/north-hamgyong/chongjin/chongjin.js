// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"chongjin","repository":"asia","path":"north-korea/north-hamgyong/chongjin","depth":3,"parent":"north-korea/north-hamgyong","children":["p-ohang-dong"]});
export const childModules = Object.freeze({"p-ohang-dong":"./p-ohang-dong/p-ohang-dong.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
