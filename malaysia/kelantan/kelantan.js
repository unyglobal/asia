// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kelantan","repository":"asia","path":"malaysia/kelantan","depth":2,"parent":"malaysia","children":["gua-musang","kampong-kadok","kampong-pangkal-kalong","kampung-jeli","kota-bharu","kuala-krai","pasir-mas","pasir-puteh","peringat","tanah-merah","wakaf-baharu"]});
export const childModules = Object.freeze({"gua-musang":"./gua-musang/gua-musang.js","kampong-kadok":"./kampong-kadok/kampong-kadok.js","kampong-pangkal-kalong":"./kampong-pangkal-kalong/kampong-pangkal-kalong.js","kampung-jeli":"./kampung-jeli/kampung-jeli.js","kota-bharu":"./kota-bharu/kota-bharu.js","kuala-krai":"./kuala-krai/kuala-krai.js","pasir-mas":"./pasir-mas/pasir-mas.js","pasir-puteh":"./pasir-puteh/pasir-puteh.js","peringat":"./peringat/peringat.js","tanah-merah":"./tanah-merah/tanah-merah.js","wakaf-baharu":"./wakaf-baharu/wakaf-baharu.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
