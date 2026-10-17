// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"iwakuni","repository":"asia","path":"japan/yamaguchi/iwakuni","depth":3,"parent":"japan/yamaguchi","children":["asahimachi","imazumachi","kawaguchimachi","kawashimomachi","marifumachi","mikasamachi","nakazumachi","yamatemachi"]});
export const childModules = Object.freeze({"asahimachi":"./asahimachi/asahimachi.js","imazumachi":"./imazumachi/imazumachi.js","kawaguchimachi":"./kawaguchimachi/kawaguchimachi.js","kawashimomachi":"./kawashimomachi/kawashimomachi.js","marifumachi":"./marifumachi/marifumachi.js","mikasamachi":"./mikasamachi/mikasamachi.js","nakazumachi":"./nakazumachi/nakazumachi.js","yamatemachi":"./yamatemachi/yamatemachi.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
