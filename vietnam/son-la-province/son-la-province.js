// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"son-la-province","repository":"asia","path":"vietnam/son-la-province","depth":2,"parent":"vietnam","children":["chieng-coi","it-ong","son-la","thi-tran-thuan-chau"]});
export const childModules = Object.freeze({"chieng-coi":"./chieng-coi/chieng-coi.js","it-ong":"./it-ong/it-ong.js","son-la":"./son-la/son-la.js","thi-tran-thuan-chau":"./thi-tran-thuan-chau/thi-tran-thuan-chau.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
