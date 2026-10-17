// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kharar","repository":"asia","path":"india/punjab/kharar","depth":3,"parent":"india/punjab","children":["panipat","sarai"]});
export const childModules = Object.freeze({"panipat":"./panipat/panipat.js","sarai":"./sarai/sarai.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
