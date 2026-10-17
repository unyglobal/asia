// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kayseri","repository":"asia","path":"turkiye/kayseri","depth":2,"parent":"turkiye","children":["develi","hac-lar","talas","yahyal"]});
export const childModules = Object.freeze({"develi":"./develi/develi.js","hac-lar":"./hac-lar/hac-lar.js","talas":"./talas/talas.js","yahyal":"./yahyal/yahyal.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
