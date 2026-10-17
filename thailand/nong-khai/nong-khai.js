// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"nong-khai","repository":"asia","path":"thailand/nong-khai","depth":2,"parent":"thailand","children":["phon-charoen","tha-bo"]});
export const childModules = Object.freeze({"phon-charoen":"./phon-charoen/phon-charoen.js","tha-bo":"./tha-bo/tha-bo.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
