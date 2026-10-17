// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"sinwon-up","repository":"asia","path":"north-korea/south-hwanghae/sinwon-up","depth":3,"parent":"north-korea/south-hwanghae","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
