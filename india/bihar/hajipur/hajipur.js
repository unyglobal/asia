// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"hajipur","repository":"asia","path":"india/bihar/hajipur","depth":3,"parent":"india/bihar","children":["andar-kila","kunara-ghat","lodipur"]});
export const childModules = Object.freeze({"andar-kila":"./andar-kila/andar-kila.js","kunara-ghat":"./kunara-ghat/kunara-ghat.js","lodipur":"./lodipur/lodipur.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
