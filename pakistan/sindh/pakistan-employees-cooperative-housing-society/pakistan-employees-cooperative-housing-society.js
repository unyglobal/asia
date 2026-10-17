// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"pakistan-employees-cooperative-housing-society","repository":"asia","path":"pakistan/sindh/pakistan-employees-cooperative-housing-society","depth":3,"parent":"pakistan/sindh","children":["ferozabad"]});
export const childModules = Object.freeze({"ferozabad":"./ferozabad/ferozabad.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
