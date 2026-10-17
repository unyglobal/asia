// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"belait","repository":"asia","path":"brunei/belait","depth":2,"parent":"brunei","children":["kuala-belait","liang"]});
export const childModules = Object.freeze({"kuala-belait":"./kuala-belait/kuala-belait.js","liang":"./liang/liang.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
