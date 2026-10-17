// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"masal","repository":"asia","path":"iran/gilan-province/masal","depth":3,"parent":"iran/gilan-province","children":["astar-mahalleh","mahalleh-ye-chehelmetr-sara"]});
export const childModules = Object.freeze({"astar-mahalleh":"./astar-mahalleh/astar-mahalleh.js","mahalleh-ye-chehelmetr-sara":"./mahalleh-ye-chehelmetr-sara/mahalleh-ye-chehelmetr-sara.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
