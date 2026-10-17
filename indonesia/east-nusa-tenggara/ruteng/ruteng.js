// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ruteng","repository":"asia","path":"indonesia/east-nusa-tenggara/ruteng","depth":3,"parent":"indonesia/east-nusa-tenggara","children":["tenda-dua","watu-satu","watu-tiga"]});
export const childModules = Object.freeze({"tenda-dua":"./tenda-dua/tenda-dua.js","watu-satu":"./watu-satu/watu-satu.js","watu-tiga":"./watu-tiga/watu-tiga.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
