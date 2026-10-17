// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"barki-saria","repository":"asia","path":"india/jharkhand/barki-saria","depth":3,"parent":"india/jharkhand","children":["balidih"]});
export const childModules = Object.freeze({"balidih":"./balidih/balidih.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
