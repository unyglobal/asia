// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"dharan","repository":"asia","path":"nepal/koshi/dharan","depth":3,"parent":"nepal/koshi","children":["jalparod","ratnarod"]});
export const childModules = Object.freeze({"jalparod":"./jalparod/jalparod.js","ratnarod":"./ratnarod/ratnarod.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
