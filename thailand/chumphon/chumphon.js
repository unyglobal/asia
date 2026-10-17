// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"chumphon","repository":"asia","path":"thailand/chumphon","depth":2,"parent":"thailand","children":["lang-suan"]});
export const childModules = Object.freeze({"lang-suan":"./lang-suan/lang-suan.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
