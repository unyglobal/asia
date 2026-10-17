// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"chak-three-hundred-twenty-three-jhang-branch","repository":"asia","path":"pakistan/punjab/toba-tek-singh/chak-three-hundred-twenty-three-jhang-branch","depth":4,"parent":"pakistan/punjab/toba-tek-singh","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
