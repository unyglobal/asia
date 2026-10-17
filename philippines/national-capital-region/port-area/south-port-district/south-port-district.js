// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"south-port-district","repository":"asia","path":"philippines/national-capital-region/port-area/south-port-district","depth":4,"parent":"philippines/national-capital-region/port-area","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
