// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"banteay-meanchey","repository":"asia","path":"cambodia/banteay-meanchey","depth":2,"parent":"cambodia","children":["ou-bei-choan","paoy-paet","sisophon"]});
export const childModules = Object.freeze({"ou-bei-choan":"./ou-bei-choan/ou-bei-choan.js","paoy-paet":"./paoy-paet/paoy-paet.js","sisophon":"./sisophon/sisophon.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
