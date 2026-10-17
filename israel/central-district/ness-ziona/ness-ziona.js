// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ness-ziona","repository":"asia","path":"israel/central-district/ness-ziona","depth":3,"parent":"israel/central-district","children":["giv-at-mikhal"]});
export const childModules = Object.freeze({"giv-at-mikhal":"./giv-at-mikhal/giv-at-mikhal.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
