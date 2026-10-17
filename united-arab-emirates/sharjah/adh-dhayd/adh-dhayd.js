// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"adh-dhayd","repository":"asia","path":"united-arab-emirates/sharjah/adh-dhayd","depth":3,"parent":"united-arab-emirates/sharjah","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
