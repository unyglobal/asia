// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"chah-pippalwala","repository":"asia","path":"pakistan/khyber-pakhtunkhwa/dera-ismail-khan/chah-pippalwala","depth":4,"parent":"pakistan/khyber-pakhtunkhwa/dera-ismail-khan","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
