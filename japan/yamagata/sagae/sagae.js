// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"sagae","repository":"asia","path":"japan/yamagata/sagae","depth":3,"parent":"japan/yamagata","children":["honcho","marunochi","minamimachi","rokkumachi"]});
export const childModules = Object.freeze({"honcho":"./honcho/honcho.js","marunochi":"./marunochi/marunochi.js","minamimachi":"./minamimachi/minamimachi.js","rokkumachi":"./rokkumachi/rokkumachi.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
