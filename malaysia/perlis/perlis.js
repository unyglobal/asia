// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"perlis","repository":"asia","path":"malaysia/perlis","depth":2,"parent":"malaysia","children":["kampung-hutan-arau","kangar"]});
export const childModules = Object.freeze({"kampung-hutan-arau":"./kampung-hutan-arau/kampung-hutan-arau.js","kangar":"./kangar/kangar.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
