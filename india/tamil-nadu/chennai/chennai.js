// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"chennai","repository":"asia","path":"india/tamil-nadu/chennai","depth":3,"parent":"india/tamil-nadu","children":["park-town","sowcarpet"]});
export const childModules = Object.freeze({"park-town":"./park-town/park-town.js","sowcarpet":"./sowcarpet/sowcarpet.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
