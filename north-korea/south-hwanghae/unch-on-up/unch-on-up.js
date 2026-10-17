// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"unch-on-up","repository":"asia","path":"north-korea/south-hwanghae/unch-on-up","depth":3,"parent":"north-korea/south-hwanghae","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
