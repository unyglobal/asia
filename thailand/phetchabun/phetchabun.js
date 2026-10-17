// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"phetchabun","repository":"asia","path":"thailand/phetchabun","depth":2,"parent":"thailand","children":["chon-daen","lom-sak","nong-phai","wichian-buri"]});
export const childModules = Object.freeze({"chon-daen":"./chon-daen/chon-daen.js","lom-sak":"./lom-sak/lom-sak.js","nong-phai":"./nong-phai/nong-phai.js","wichian-buri":"./wichian-buri/wichian-buri.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
