// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"abkhazia","repository":"asia","path":"georgia/abkhazia","depth":2,"parent":"georgia","children":["sokhumi","stantsiya-novyy-afon"]});
export const childModules = Object.freeze({"sokhumi":"./sokhumi/sokhumi.js","stantsiya-novyy-afon":"./stantsiya-novyy-afon/stantsiya-novyy-afon.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
