// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"southern-province","repository":"asia","path":"sri-lanka/southern-province","depth":2,"parent":"sri-lanka","children":["ambalangoda","ambalantota","beliatta","bentota","devinuwara","galle","hambantota","matara","weligama"]});
export const childModules = Object.freeze({"ambalangoda":"./ambalangoda/ambalangoda.js","ambalantota":"./ambalantota/ambalantota.js","beliatta":"./beliatta/beliatta.js","bentota":"./bentota/bentota.js","devinuwara":"./devinuwara/devinuwara.js","galle":"./galle/galle.js","hambantota":"./hambantota/hambantota.js","matara":"./matara/matara.js","weligama":"./weligama/weligama.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
