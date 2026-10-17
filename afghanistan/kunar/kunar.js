// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kunar","repository":"asia","path":"afghanistan/kunar","depth":2,"parent":"afghanistan","children":["asadabad","asmar"]});
export const childModules = Object.freeze({"asadabad":"./asadabad/asadabad.js","asmar":"./asmar/asmar.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
