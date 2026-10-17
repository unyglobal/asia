// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"jaffa","repository":"asia","path":"israel/tel-aviv/jaffa","depth":3,"parent":"israel/tel-aviv","children":["ajami","tsafon-vemerkaz-yafo","yafo-ha-attiqa"]});
export const childModules = Object.freeze({"ajami":"./ajami/ajami.js","tsafon-vemerkaz-yafo":"./tsafon-vemerkaz-yafo/tsafon-vemerkaz-yafo.js","yafo-ha-attiqa":"./yafo-ha-attiqa/yafo-ha-attiqa.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
