// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"port-area","repository":"asia","path":"philippines/national-capital-region/port-area","depth":3,"parent":"philippines/national-capital-region","children":["south-port-district"]});
export const childModules = Object.freeze({"south-port-district":"./south-port-district/south-port-district.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
