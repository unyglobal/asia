// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"sokcho","repository":"asia","path":"south-korea/gangwon-do/sokcho","depth":3,"parent":"south-korea/gangwon-do","children":["kumho-dong","tongmyong-dong"]});
export const childModules = Object.freeze({"kumho-dong":"./kumho-dong/kumho-dong.js","tongmyong-dong":"./tongmyong-dong/tongmyong-dong.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
