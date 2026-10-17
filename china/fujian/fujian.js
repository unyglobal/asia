// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"fujian","repository":"asia","path":"china/fujian","depth":2,"parent":"china","children":["fu-an","fuding","fuqing","jian-ou","liancheng","longyan","ningde","pucheng","putian","quanzhou","sanming","shaowu","songcheng","wenheng","wuyishan","xiamen","ximeicun","zhangzhou"]});
export const childModules = Object.freeze({"fu-an":"./fu-an/fu-an.js","fuding":"./fuding/fuding.js","fuqing":"./fuqing/fuqing.js","jian-ou":"./jian-ou/jian-ou.js","liancheng":"./liancheng/liancheng.js","longyan":"./longyan/longyan.js","ningde":"./ningde/ningde.js","pucheng":"./pucheng/pucheng.js","putian":"./putian/putian.js","quanzhou":"./quanzhou/quanzhou.js","sanming":"./sanming/sanming.js","shaowu":"./shaowu/shaowu.js","songcheng":"./songcheng/songcheng.js","wenheng":"./wenheng/wenheng.js","wuyishan":"./wuyishan/wuyishan.js","xiamen":"./xiamen/xiamen.js","ximeicun":"./ximeicun/ximeicun.js","zhangzhou":"./zhangzhou/zhangzhou.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
