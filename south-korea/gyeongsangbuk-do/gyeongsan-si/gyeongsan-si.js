// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"gyeongsan-si","repository":"asia","path":"south-korea/gyeongsangbuk-do/gyeongsan-si","depth":3,"parent":"south-korea/gyeongsangbuk-do","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
