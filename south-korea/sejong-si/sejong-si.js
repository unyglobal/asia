// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"sejong-si","repository":"asia","path":"south-korea/sejong-si","depth":2,"parent":"south-korea","children":["sejong"]});
export const childModules = Object.freeze({"sejong":"./sejong/sejong.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
