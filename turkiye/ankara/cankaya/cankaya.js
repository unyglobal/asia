// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"cankaya","repository":"asia","path":"turkiye/ankara/cankaya","depth":3,"parent":"turkiye/ankara","children":["bakanl-klar","incesu","kavakl-dere","kocatepe","kolej","seyran-baglar","toprakl-k"]});
export const childModules = Object.freeze({"bakanl-klar":"./bakanl-klar/bakanl-klar.js","incesu":"./incesu/incesu.js","kavakl-dere":"./kavakl-dere/kavakl-dere.js","kocatepe":"./kocatepe/kocatepe.js","kolej":"./kolej/kolej.js","seyran-baglar":"./seyran-baglar/seyran-baglar.js","toprakl-k":"./toprakl-k/toprakl-k.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
