// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"balqa","repository":"asia","path":"jordan/balqa","depth":2,"parent":"jordan","children":["al-fuhays","as-salt","mahis","suwaylih"]});
export const childModules = Object.freeze({"al-fuhays":"./al-fuhays/al-fuhays.js","as-salt":"./as-salt/as-salt.js","mahis":"./mahis/mahis.js","suwaylih":"./suwaylih/suwaylih.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
