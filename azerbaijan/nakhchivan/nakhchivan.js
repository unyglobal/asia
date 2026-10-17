// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"nakhchivan","repository":"asia","path":"azerbaijan/nakhchivan","depth":2,"parent":"azerbaijan","children":["naxc-van","nehram"]});
export const childModules = Object.freeze({"naxc-van":"./naxc-van/naxc-van.js","nehram":"./nehram/nehram.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
