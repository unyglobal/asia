// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"cankiri","repository":"asia","path":"turkiye/cankiri","depth":2,"parent":"turkiye","children":["cank-r","cerkes"]});
export const childModules = Object.freeze({"cank-r":"./cank-r/cank-r.js","cerkes":"./cerkes/cerkes.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
