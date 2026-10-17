// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"tanintharyi-region","repository":"asia","path":"myanmar/tanintharyi-region","depth":2,"parent":"myanmar","children":["dawei","kawthoung","myeik"]});
export const childModules = Object.freeze({"dawei":"./dawei/dawei.js","kawthoung":"./kawthoung/kawthoung.js","myeik":"./myeik/myeik.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
