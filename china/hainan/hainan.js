// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"hainan","repository":"asia","path":"china/hainan","depth":2,"parent":"china","children":["baimajing","baocheng","basuo","dacheng","dongcheng","eman","guangcun","haitou","heqing","lanyang","lingao","mutang","nada","paipu","qionghai","qiongshan","sandu","sanya","wangwu","wanning","wenchang","wuzhishan","xiuying","yaxing","yinggen"]});
export const childModules = Object.freeze({"baimajing":"./baimajing/baimajing.js","baocheng":"./baocheng/baocheng.js","basuo":"./basuo/basuo.js","dacheng":"./dacheng/dacheng.js","dongcheng":"./dongcheng/dongcheng.js","eman":"./eman/eman.js","guangcun":"./guangcun/guangcun.js","haitou":"./haitou/haitou.js","heqing":"./heqing/heqing.js","lanyang":"./lanyang/lanyang.js","lingao":"./lingao/lingao.js","mutang":"./mutang/mutang.js","nada":"./nada/nada.js","paipu":"./paipu/paipu.js","qionghai":"./qionghai/qionghai.js","qiongshan":"./qiongshan/qiongshan.js","sandu":"./sandu/sandu.js","sanya":"./sanya/sanya.js","wangwu":"./wangwu/wangwu.js","wanning":"./wanning/wanning.js","wenchang":"./wenchang/wenchang.js","wuzhishan":"./wuzhishan/wuzhishan.js","xiuying":"./xiuying/xiuying.js","yaxing":"./yaxing/yaxing.js","yinggen":"./yinggen/yinggen.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
