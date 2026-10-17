// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kumamoto","repository":"asia","path":"japan/kumamoto","depth":2,"parent":"japan","children":["amakusa","arao","aso","hitoyoshi","hondomachi-hondo","honmachi","kikuchi","koshi","koto","matsubase","mifune","minamata","nagasu","okino","oyanomachi-noboritate","sashiki","tamana","uekimachi-mono","uki","ushibukamachi","uto","yamaga"]});
export const childModules = Object.freeze({"amakusa":"./amakusa/amakusa.js","arao":"./arao/arao.js","aso":"./aso/aso.js","hitoyoshi":"./hitoyoshi/hitoyoshi.js","hondomachi-hondo":"./hondomachi-hondo/hondomachi-hondo.js","honmachi":"./honmachi/honmachi.js","kikuchi":"./kikuchi/kikuchi.js","koshi":"./koshi/koshi.js","koto":"./koto/koto.js","matsubase":"./matsubase/matsubase.js","mifune":"./mifune/mifune.js","minamata":"./minamata/minamata.js","nagasu":"./nagasu/nagasu.js","okino":"./okino/okino.js","oyanomachi-noboritate":"./oyanomachi-noboritate/oyanomachi-noboritate.js","sashiki":"./sashiki/sashiki.js","tamana":"./tamana/tamana.js","uekimachi-mono":"./uekimachi-mono/uekimachi-mono.js","uki":"./uki/uki.js","ushibukamachi":"./ushibukamachi/ushibukamachi.js","uto":"./uto/uto.js","yamaga":"./yamaga/yamaga.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
