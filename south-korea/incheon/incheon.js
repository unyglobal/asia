// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"incheon","repository":"asia","path":"south-korea/incheon","depth":2,"parent":"south-korea","children":["ganghwa-gun"]});
export const childModules = Object.freeze({"ganghwa-gun":"./ganghwa-gun/ganghwa-gun.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
