// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"nushki","repository":"asia","path":"pakistan/balochistan/nushki","depth":3,"parent":"pakistan/balochistan","children":["gharibabad"]});
export const childModules = Object.freeze({"gharibabad":"./gharibabad/gharibabad.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
