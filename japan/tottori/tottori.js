// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"tottori","repository":"asia","path":"japan/tottori","depth":2,"parent":"japan","children":["koge","kurayoshi","matsuzaki","mikuriya","sakaiminato","tottori-shi","yabase","yonago"]});
export const childModules = Object.freeze({"koge":"./koge/koge.js","kurayoshi":"./kurayoshi/kurayoshi.js","matsuzaki":"./matsuzaki/matsuzaki.js","mikuriya":"./mikuriya/mikuriya.js","sakaiminato":"./sakaiminato/sakaiminato.js","tottori-shi":"./tottori-shi/tottori-shi.js","yabase":"./yabase/yabase.js","yonago":"./yonago/yonago.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
