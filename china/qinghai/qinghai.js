// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"qinghai","repository":"asia","path":"china/qinghai","depth":2,"parent":"china","children":["dongchuan","duoba","guolemude","haomen","huatugou","lushar","mangnai-zhen","maqin-county","nianbo","qabqa","qilian","qingshizui","quankou","xining"]});
export const childModules = Object.freeze({"dongchuan":"./dongchuan/dongchuan.js","duoba":"./duoba/duoba.js","guolemude":"./guolemude/guolemude.js","haomen":"./haomen/haomen.js","huatugou":"./huatugou/huatugou.js","lushar":"./lushar/lushar.js","mangnai-zhen":"./mangnai-zhen/mangnai-zhen.js","maqin-county":"./maqin-county/maqin-county.js","nianbo":"./nianbo/nianbo.js","qabqa":"./qabqa/qabqa.js","qilian":"./qilian/qilian.js","qingshizui":"./qingshizui/qingshizui.js","quankou":"./quankou/quankou.js","xining":"./xining/xining.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
