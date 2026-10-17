// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"shanxi","repository":"asia","path":"china/shanxi","depth":2,"parent":"china","children":["gutao","jiexiu","jincheng","jinzhong","linfen","luliang","shuozhou","taiyuan","xinzhi","yangjiaying","yangquan","yongji","yuanping","yuci","yuncheng"]});
export const childModules = Object.freeze({"gutao":"./gutao/gutao.js","jiexiu":"./jiexiu/jiexiu.js","jincheng":"./jincheng/jincheng.js","jinzhong":"./jinzhong/jinzhong.js","linfen":"./linfen/linfen.js","luliang":"./luliang/luliang.js","shuozhou":"./shuozhou/shuozhou.js","taiyuan":"./taiyuan/taiyuan.js","xinzhi":"./xinzhi/xinzhi.js","yangjiaying":"./yangjiaying/yangjiaying.js","yangquan":"./yangquan/yangquan.js","yongji":"./yongji/yongji.js","yuanping":"./yuanping/yuanping.js","yuci":"./yuci/yuci.js","yuncheng":"./yuncheng/yuncheng.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
