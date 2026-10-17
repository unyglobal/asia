// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"karaganda","repository":"asia","path":"kazakhstan/karaganda","depth":2,"parent":"kazakhstan","children":["balqash","karagandy","saran","shakhtinsk","temirtau"]});
export const childModules = Object.freeze({"balqash":"./balqash/balqash.js","karagandy":"./karagandy/karagandy.js","saran":"./saran/saran.js","shakhtinsk":"./shakhtinsk/shakhtinsk.js","temirtau":"./temirtau/temirtau.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
