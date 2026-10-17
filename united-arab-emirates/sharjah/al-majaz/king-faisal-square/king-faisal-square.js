// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"king-faisal-square","repository":"asia","path":"united-arab-emirates/sharjah/al-majaz/king-faisal-square","depth":4,"parent":"united-arab-emirates/sharjah/al-majaz","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
