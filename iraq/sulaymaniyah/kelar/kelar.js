// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kelar","repository":"asia","path":"iraq/sulaymaniyah/kelar","depth":3,"parent":"iraq/sulaymaniyah","children":["hamah-karim"]});
export const childModules = Object.freeze({"hamah-karim":"./hamah-karim/hamah-karim.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
