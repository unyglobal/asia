// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"wazirabad","repository":"asia","path":"pakistan/punjab/wazirabad","depth":3,"parent":"pakistan/punjab","children":["phaliwala"]});
export const childModules = Object.freeze({"phaliwala":"./phaliwala/phaliwala.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
