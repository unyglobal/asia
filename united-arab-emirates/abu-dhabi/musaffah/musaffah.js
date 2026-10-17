// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"musaffah","repository":"asia","path":"united-arab-emirates/abu-dhabi/musaffah","depth":3,"parent":"united-arab-emirates/abu-dhabi","children":["m17","m18","m19","m39","m45","m46"]});
export const childModules = Object.freeze({"m17":"./m17/m17.js","m18":"./m18/m18.js","m19":"./m19/m19.js","m39":"./m39/m39.js","m45":"./m45/m45.js","m46":"./m46/m46.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
