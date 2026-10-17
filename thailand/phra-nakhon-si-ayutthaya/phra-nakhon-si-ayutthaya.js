// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"phra-nakhon-si-ayutthaya","repository":"asia","path":"thailand/phra-nakhon-si-ayutthaya","depth":2,"parent":"thailand","children":["bang-ban","bang-pa-in","nakhon-luang","phak-hai","tha-ruea","wang-noi"]});
export const childModules = Object.freeze({"bang-ban":"./bang-ban/bang-ban.js","bang-pa-in":"./bang-pa-in/bang-pa-in.js","nakhon-luang":"./nakhon-luang/nakhon-luang.js","phak-hai":"./phak-hai/phak-hai.js","tha-ruea":"./tha-ruea/tha-ruea.js","wang-noi":"./wang-noi/wang-noi.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
