// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"toba-tek-singh","repository":"asia","path":"pakistan/punjab/toba-tek-singh","depth":3,"parent":"pakistan/punjab","children":["chak-three-hundred-twenty-three-jhang-branch"]});
export const childModules = Object.freeze({"chak-three-hundred-twenty-three-jhang-branch":"./chak-three-hundred-twenty-three-jhang-branch/chak-three-hundred-twenty-three-jhang-branch.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
