// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kokubunji","repository":"asia","path":"japan/tokyo/kokubunji","depth":3,"parent":"japan/tokyo","children":["honcho","honda","izumicho","minamicho"]});
export const childModules = Object.freeze({"honcho":"./honcho/honcho.js","honda":"./honda/honda.js","izumicho":"./izumicho/izumicho.js","minamicho":"./minamicho/minamicho.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
