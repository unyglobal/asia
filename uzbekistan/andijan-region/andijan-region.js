// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"andijan-region","repository":"asia","path":"uzbekistan/andijan-region","depth":2,"parent":"uzbekistan","children":["andijon","asaka","chinobod","dardoq","jalolquduq","oyim","paxtaobod","poytug","qo-rg-ontepa","qorasuv","shahrixon","sultonobod","xo-jaobod","xonobod"]});
export const childModules = Object.freeze({"andijon":"./andijon/andijon.js","asaka":"./asaka/asaka.js","chinobod":"./chinobod/chinobod.js","dardoq":"./dardoq/dardoq.js","jalolquduq":"./jalolquduq/jalolquduq.js","oyim":"./oyim/oyim.js","paxtaobod":"./paxtaobod/paxtaobod.js","poytug":"./poytug/poytug.js","qo-rg-ontepa":"./qo-rg-ontepa/qo-rg-ontepa.js","qorasuv":"./qorasuv/qorasuv.js","shahrixon":"./shahrixon/shahrixon.js","sultonobod":"./sultonobod/sultonobod.js","xo-jaobod":"./xo-jaobod/xo-jaobod.js","xonobod":"./xonobod/xonobod.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
