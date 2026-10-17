// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"tel-aviv","repository":"asia","path":"israel/tel-aviv","depth":2,"parent":"israel","children":["bat-yam","bnei-brak","giv-at-shmuel","givatayim","herzliya","holon","jaffa","kiryat-ono","or-yehuda","ramat-gan","ramat-hasharon","yehud-monosson"]});
export const childModules = Object.freeze({"bat-yam":"./bat-yam/bat-yam.js","bnei-brak":"./bnei-brak/bnei-brak.js","giv-at-shmuel":"./giv-at-shmuel/giv-at-shmuel.js","givatayim":"./givatayim/givatayim.js","herzliya":"./herzliya/herzliya.js","holon":"./holon/holon.js","jaffa":"./jaffa/jaffa.js","kiryat-ono":"./kiryat-ono/kiryat-ono.js","or-yehuda":"./or-yehuda/or-yehuda.js","ramat-gan":"./ramat-gan/ramat-gan.js","ramat-hasharon":"./ramat-hasharon/ramat-hasharon.js","yehud-monosson":"./yehud-monosson/yehud-monosson.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
