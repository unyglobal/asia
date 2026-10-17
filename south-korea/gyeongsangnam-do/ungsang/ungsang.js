// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ungsang","repository":"asia","path":"south-korea/gyeongsangnam-do/ungsang","depth":3,"parent":"south-korea/gyeongsangnam-do","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
