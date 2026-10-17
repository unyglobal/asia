// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"jiangxi","repository":"asia","path":"china/gansu/jiangxi","depth":3,"parent":"china/gansu","children":["aoxi","bashan","changleng","dengbu","dunhou","fenggang","fenyi","ganzhou","gongqingcheng","huayuan","jianchang","jianguang"]});
export const childModules = Object.freeze({"aoxi":"./aoxi/aoxi.js","bashan":"./bashan/bashan.js","changleng":"./changleng/changleng.js","dengbu":"./dengbu/dengbu.js","dunhou":"./dunhou/dunhou.js","fenggang":"./fenggang/fenggang.js","fenyi":"./fenyi/fenyi.js","ganzhou":"./ganzhou/ganzhou.js","gongqingcheng":"./gongqingcheng/gongqingcheng.js","huayuan":"./huayuan/huayuan.js","jianchang":"./jianchang/jianchang.js","jianguang":"./jianguang/jianguang.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
