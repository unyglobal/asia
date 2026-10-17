// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"bostanabad","repository":"asia","path":"iran/east-azerbaijan/bostanabad","depth":3,"parent":"iran/east-azerbaijan","children":["bostanabad-e-bala","bostanabad-e-pa-in","qarah-kureh"]});
export const childModules = Object.freeze({"bostanabad-e-bala":"./bostanabad-e-bala/bostanabad-e-bala.js","bostanabad-e-pa-in":"./bostanabad-e-pa-in/bostanabad-e-pa-in.js","qarah-kureh":"./qarah-kureh/qarah-kureh.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
