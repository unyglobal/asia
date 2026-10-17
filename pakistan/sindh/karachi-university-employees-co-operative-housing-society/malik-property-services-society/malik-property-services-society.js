// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"malik-property-services-society","repository":"asia","path":"pakistan/sindh/karachi-university-employees-co-operative-housing-society/malik-property-services-society","depth":4,"parent":"pakistan/sindh/karachi-university-employees-co-operative-housing-society","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
