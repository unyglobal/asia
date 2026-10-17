// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"bandar-e-mahshahr","repository":"asia","path":"iran/khuzestan/bandar-e-mahshahr","depth":3,"parent":"iran/khuzestan","children":["faz-e-seh","faz-e-yek"]});
export const childModules = Object.freeze({"faz-e-seh":"./faz-e-seh/faz-e-seh.js","faz-e-yek":"./faz-e-yek/faz-e-yek.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
