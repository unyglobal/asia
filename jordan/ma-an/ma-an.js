// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ma-an","repository":"asia","path":"jordan/ma-an","depth":2,"parent":"jordan","children":["qir-moav"]});
export const childModules = Object.freeze({"qir-moav":"./qir-moav/qir-moav.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
