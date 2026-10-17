// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"king-faisal-military-city","repository":"asia","path":"saudi-arabia/eastern-province/king-faisal-military-city","depth":3,"parent":"saudi-arabia/eastern-province","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
