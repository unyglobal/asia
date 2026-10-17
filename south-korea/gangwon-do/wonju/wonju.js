// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"wonju","repository":"asia","path":"south-korea/gangwon-do/wonju","depth":3,"parent":"south-korea/gangwon-do","children":["haksong-dong","ilsan-dong","wonin-dong"]});
export const childModules = Object.freeze({"haksong-dong":"./haksong-dong/haksong-dong.js","ilsan-dong":"./ilsan-dong/ilsan-dong.js","wonin-dong":"./wonin-dong/wonin-dong.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
