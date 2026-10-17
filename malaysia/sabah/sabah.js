// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"sabah","repository":"asia","path":"malaysia/sabah","depth":2,"parent":"malaysia","children":["bandar-labuan","bandar-nabawan","beaufort","donggongon","keningau","kinarut","kota-kinabalu","kuala-penyu","kudat","lahad-datu","papar","petagas","putatan","ranau","sandakan","semporna","sipitang","tambunan","tawau"]});
export const childModules = Object.freeze({"bandar-labuan":"./bandar-labuan/bandar-labuan.js","bandar-nabawan":"./bandar-nabawan/bandar-nabawan.js","beaufort":"./beaufort/beaufort.js","donggongon":"./donggongon/donggongon.js","keningau":"./keningau/keningau.js","kinarut":"./kinarut/kinarut.js","kota-kinabalu":"./kota-kinabalu/kota-kinabalu.js","kuala-penyu":"./kuala-penyu/kuala-penyu.js","kudat":"./kudat/kudat.js","lahad-datu":"./lahad-datu/lahad-datu.js","papar":"./papar/papar.js","petagas":"./petagas/petagas.js","putatan":"./putatan/putatan.js","ranau":"./ranau/ranau.js","sandakan":"./sandakan/sandakan.js","semporna":"./semporna/semporna.js","sipitang":"./sipitang/sipitang.js","tambunan":"./tambunan/tambunan.js","tawau":"./tawau/tawau.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
