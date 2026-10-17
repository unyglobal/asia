// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"lahore","repository":"asia","path":"pakistan/punjab/lahore","depth":3,"parent":"pakistan/punjab","children":["garhi-shahu","meo-garden"]});
export const childModules = Object.freeze({"garhi-shahu":"./garhi-shahu/garhi-shahu.js","meo-garden":"./meo-garden/meo-garden.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
