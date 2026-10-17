// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ratchaburi","repository":"asia","path":"thailand/ratchaburi","depth":2,"parent":"thailand","children":["ban-i-chang","ban-pong","bang-phae","chom-bueng","damnoen-saduak","photharam"]});
export const childModules = Object.freeze({"ban-i-chang":"./ban-i-chang/ban-i-chang.js","ban-pong":"./ban-pong/ban-pong.js","bang-phae":"./bang-phae/bang-phae.js","chom-bueng":"./chom-bueng/chom-bueng.js","damnoen-saduak":"./damnoen-saduak/damnoen-saduak.js","photharam":"./photharam/photharam.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
