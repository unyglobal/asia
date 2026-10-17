// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"southeast-sulawesi","repository":"asia","path":"indonesia/southeast-sulawesi","depth":2,"parent":"indonesia","children":["baubau","katobu","kendari","raha"]});
export const childModules = Object.freeze({"baubau":"./baubau/baubau.js","katobu":"./katobu/katobu.js","kendari":"./kendari/kendari.js","raha":"./raha/raha.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
