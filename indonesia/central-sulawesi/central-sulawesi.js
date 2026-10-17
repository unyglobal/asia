// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"central-sulawesi","repository":"asia","path":"indonesia/central-sulawesi","depth":2,"parent":"indonesia","children":["bungku","luwuk","palu","poso","toli-toli"]});
export const childModules = Object.freeze({"bungku":"./bungku/bungku.js","luwuk":"./luwuk/luwuk.js","palu":"./palu/palu.js","poso":"./poso/poso.js","toli-toli":"./toli-toli/toli-toli.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
