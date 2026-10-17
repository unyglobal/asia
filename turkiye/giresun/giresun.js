// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"giresun","repository":"asia","path":"turkiye/giresun","depth":2,"parent":"turkiye","children":["bulancak","espiye","gorele","sebin-karahisar","tirebolu"]});
export const childModules = Object.freeze({"bulancak":"./bulancak/bulancak.js","espiye":"./espiye/espiye.js","gorele":"./gorele/gorele.js","sebin-karahisar":"./sebin-karahisar/sebin-karahisar.js","tirebolu":"./tirebolu/tirebolu.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
