// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"west-kalimantan","repository":"asia","path":"indonesia/west-kalimantan","depth":2,"parent":"indonesia","children":["bengkayang","kota-sambas","manismata","pemangkat","pontianak","singkawang","sintang","sungai-raya"]});
export const childModules = Object.freeze({"bengkayang":"./bengkayang/bengkayang.js","kota-sambas":"./kota-sambas/kota-sambas.js","manismata":"./manismata/manismata.js","pemangkat":"./pemangkat/pemangkat.js","pontianak":"./pontianak/pontianak.js","singkawang":"./singkawang/singkawang.js","sintang":"./sintang/sintang.js","sungai-raya":"./sungai-raya/sungai-raya.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
