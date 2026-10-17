// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"mimaropa","repository":"asia","path":"philippines/mimaropa","depth":2,"parent":"philippines","children":["brookes-point","calapan","culion","el-nido","jose-rizal","mamburao","mansalay","mapun","narra","pinamalayan","puerto-princesa","romblon","sablayan"]});
export const childModules = Object.freeze({"brookes-point":"./brookes-point/brookes-point.js","calapan":"./calapan/calapan.js","culion":"./culion/culion.js","el-nido":"./el-nido/el-nido.js","jose-rizal":"./jose-rizal/jose-rizal.js","mamburao":"./mamburao/mamburao.js","mansalay":"./mansalay/mansalay.js","mapun":"./mapun/mapun.js","narra":"./narra/narra.js","pinamalayan":"./pinamalayan/pinamalayan.js","puerto-princesa":"./puerto-princesa/puerto-princesa.js","romblon":"./romblon/romblon.js","sablayan":"./sablayan/sablayan.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
