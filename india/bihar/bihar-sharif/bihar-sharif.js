// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"bihar-sharif","repository":"asia","path":"india/bihar/bihar-sharif","depth":3,"parent":"india/bihar","children":["baignabad"]});
export const childModules = Object.freeze({"baignabad":"./baignabad/baignabad.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
