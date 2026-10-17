// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"dhaki-manawar-shah","repository":"asia","path":"pakistan/khyber-pakhtunkhwa/peshawar/dhaki-manawar-shah","depth":4,"parent":"pakistan/khyber-pakhtunkhwa/peshawar","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
