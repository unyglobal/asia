// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"sirnak","repository":"asia","path":"turkiye/sirnak","depth":2,"parent":"turkiye","children":["cizre","idil","s-rnak","silopi"]});
export const childModules = Object.freeze({"cizre":"./cizre/cizre.js","idil":"./idil/idil.js","s-rnak":"./s-rnak/s-rnak.js","silopi":"./silopi/silopi.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
