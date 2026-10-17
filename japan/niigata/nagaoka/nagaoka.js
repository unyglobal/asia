// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"nagaoka","repository":"asia","path":"japan/niigata/nagaoka","depth":3,"parent":"japan/niigata","children":["daimachi","fukuzumi","higashikanda","hoshiba","kashiwacho","kasuga","kesajiro","minamimachi","nakajima","nishisenju","nissekicho","senju","showa","suidocho","yamada","yumicho","zaomachi"]});
export const childModules = Object.freeze({"daimachi":"./daimachi/daimachi.js","fukuzumi":"./fukuzumi/fukuzumi.js","higashikanda":"./higashikanda/higashikanda.js","hoshiba":"./hoshiba/hoshiba.js","kashiwacho":"./kashiwacho/kashiwacho.js","kasuga":"./kasuga/kasuga.js","kesajiro":"./kesajiro/kesajiro.js","minamimachi":"./minamimachi/minamimachi.js","nakajima":"./nakajima/nakajima.js","nishisenju":"./nishisenju/nishisenju.js","nissekicho":"./nissekicho/nissekicho.js","senju":"./senju/senju.js","showa":"./showa/showa.js","suidocho":"./suidocho/suidocho.js","yamada":"./yamada/yamada.js","yumicho":"./yumicho/yumicho.js","zaomachi":"./zaomachi/zaomachi.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
