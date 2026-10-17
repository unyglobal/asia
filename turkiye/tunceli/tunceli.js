// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"tunceli","repository":"asia","path":"turkiye/tunceli","depth":2,"parent":"turkiye","children":["akcap-nar"]});
export const childModules = Object.freeze({"akcap-nar":"./akcap-nar/akcap-nar.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
