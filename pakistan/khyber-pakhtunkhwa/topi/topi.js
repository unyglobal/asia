// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"topi","repository":"asia","path":"pakistan/khyber-pakhtunkhwa/topi","depth":3,"parent":"pakistan/khyber-pakhtunkhwa","children":["abasin-colony"]});
export const childModules = Object.freeze({"abasin-colony":"./abasin-colony/abasin-colony.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
