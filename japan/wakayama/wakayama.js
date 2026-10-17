// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"wakayama","repository":"asia","path":"japan/wakayama","depth":2,"parent":"japan","children":["arida","asso","gobo","hashimoto","itogawa","iwade","kainan","kinokawa","kushimoto","minato","nakaiburi","shirahama"]});
export const childModules = Object.freeze({"arida":"./arida/arida.js","asso":"./asso/asso.js","gobo":"./gobo/gobo.js","hashimoto":"./hashimoto/hashimoto.js","itogawa":"./itogawa/itogawa.js","iwade":"./iwade/iwade.js","kainan":"./kainan/kainan.js","kinokawa":"./kinokawa/kinokawa.js","kushimoto":"./kushimoto/kushimoto.js","minato":"./minato/minato.js","nakaiburi":"./nakaiburi/nakaiburi.js","shirahama":"./shirahama/shirahama.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
