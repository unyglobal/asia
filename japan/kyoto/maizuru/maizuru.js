// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"maizuru","repository":"asia","path":"japan/kyoto/maizuru","depth":3,"parent":"japan/kyoto","children":["kyoguchi"]});
export const childModules = Object.freeze({"kyoguchi":"./kyoguchi/kyoguchi.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
