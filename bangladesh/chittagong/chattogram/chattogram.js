// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"chattogram","repository":"asia","path":"bangladesh/chittagong/chattogram","depth":3,"parent":"bangladesh/chittagong","children":["alkapan","dampara","diwan-bazar","kotwali"]});
export const childModules = Object.freeze({"alkapan":"./alkapan/alkapan.js","dampara":"./dampara/dampara.js","diwan-bazar":"./diwan-bazar/diwan-bazar.js","kotwali":"./kotwali/kotwali.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
