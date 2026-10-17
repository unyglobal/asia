// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"aley","repository":"asia","path":"lebanon/mount-lebanon/aley","depth":3,"parent":"lebanon/mount-lebanon","children":["ain-el-aadas","ain-qataya","el-pissine","haret-el-badaoui","haret-el-machayekh","haret-en-nassara","haret-er-rayess","ras-el-horch"]});
export const childModules = Object.freeze({"ain-el-aadas":"./ain-el-aadas/ain-el-aadas.js","ain-qataya":"./ain-qataya/ain-qataya.js","el-pissine":"./el-pissine/el-pissine.js","haret-el-badaoui":"./haret-el-badaoui/haret-el-badaoui.js","haret-el-machayekh":"./haret-el-machayekh/haret-el-machayekh.js","haret-en-nassara":"./haret-en-nassara/haret-en-nassara.js","haret-er-rayess":"./haret-er-rayess/haret-er-rayess.js","ras-el-horch":"./ras-el-horch/ras-el-horch.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
