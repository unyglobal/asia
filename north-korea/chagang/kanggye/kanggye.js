// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kanggye","repository":"asia","path":"north-korea/chagang/kanggye","depth":3,"parent":"north-korea/chagang","children":["kangso-dong","pujang-dong","woeryong-dong","yu-dong"]});
export const childModules = Object.freeze({"kangso-dong":"./kangso-dong/kangso-dong.js","pujang-dong":"./pujang-dong/pujang-dong.js","woeryong-dong":"./woeryong-dong/woeryong-dong.js","yu-dong":"./yu-dong/yu-dong.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
