// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"fergana","repository":"asia","path":"uzbekistan/fergana","depth":2,"parent":"uzbekistan","children":["beshariq","kirguli","marg-ilon","oltiariq","qo-qon","quva","quvasoy","rishton","toshloq","yaypan"]});
export const childModules = Object.freeze({"beshariq":"./beshariq/beshariq.js","kirguli":"./kirguli/kirguli.js","marg-ilon":"./marg-ilon/marg-ilon.js","oltiariq":"./oltiariq/oltiariq.js","qo-qon":"./qo-qon/qo-qon.js","quva":"./quva/quva.js","quvasoy":"./quvasoy/quvasoy.js","rishton":"./rishton/rishton.js","toshloq":"./toshloq/toshloq.js","yaypan":"./yaypan/yaypan.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
