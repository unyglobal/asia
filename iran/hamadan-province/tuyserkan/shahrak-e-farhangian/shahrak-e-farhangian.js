// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"shahrak-e-farhangian","repository":"asia","path":"iran/hamadan-province/tuyserkan/shahrak-e-farhangian","depth":4,"parent":"iran/hamadan-province/tuyserkan","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
