// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ajloun","repository":"asia","path":"jordan/ajloun","depth":2,"parent":"jordan","children":["ajlun","anjarah"]});
export const childModules = Object.freeze({"ajlun":"./ajlun/ajlun.js","anjarah":"./anjarah/anjarah.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
