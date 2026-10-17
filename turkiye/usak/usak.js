// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"usak","repository":"asia","path":"turkiye/usak","depth":2,"parent":"turkiye","children":["banaz"]});
export const childModules = Object.freeze({"banaz":"./banaz/banaz.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
