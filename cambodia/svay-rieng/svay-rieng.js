// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"svay-rieng","repository":"asia","path":"cambodia/svay-rieng","depth":2,"parent":"cambodia","children":["bavet"]});
export const childModules = Object.freeze({"bavet":"./bavet/bavet.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
