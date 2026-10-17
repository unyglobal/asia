// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"east-nusa-tenggara","repository":"asia","path":"indonesia/east-nusa-tenggara","depth":2,"parent":"indonesia","children":["atambua","ende","kalabahi","kefamenanu","kupang","labuan-bajo","lewoleba","maumere","ruteng","soe","tambolaka","waingapu"]});
export const childModules = Object.freeze({"atambua":"./atambua/atambua.js","ende":"./ende/ende.js","kalabahi":"./kalabahi/kalabahi.js","kefamenanu":"./kefamenanu/kefamenanu.js","kupang":"./kupang/kupang.js","labuan-bajo":"./labuan-bajo/labuan-bajo.js","lewoleba":"./lewoleba/lewoleba.js","maumere":"./maumere/maumere.js","ruteng":"./ruteng/ruteng.js","soe":"./soe/soe.js","tambolaka":"./tambolaka/tambolaka.js","waingapu":"./waingapu/waingapu.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
