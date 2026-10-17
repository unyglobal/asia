// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"logar","repository":"asia","path":"afghanistan/logar","depth":2,"parent":"afghanistan","children":["baraki-barak"]});
export const childModules = Object.freeze({"baraki-barak":"./baraki-barak/baraki-barak.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
