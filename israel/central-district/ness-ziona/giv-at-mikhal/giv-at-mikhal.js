// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"giv-at-mikhal","repository":"asia","path":"israel/central-district/ness-ziona/giv-at-mikhal","depth":4,"parent":"israel/central-district/ness-ziona","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
