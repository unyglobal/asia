// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kangwon-do","repository":"asia","path":"north-korea/kangwon-do","depth":2,"parent":"north-korea","children":["anbyon-up","hoeyang","kosan","t-ongch-on-up","wonsan"]});
export const childModules = Object.freeze({"anbyon-up":"./anbyon-up/anbyon-up.js","hoeyang":"./hoeyang/hoeyang.js","kosan":"./kosan/kosan.js","t-ongch-on-up":"./t-ongch-on-up/t-ongch-on-up.js","wonsan":"./wonsan/wonsan.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
