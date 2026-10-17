// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"chak-three-hundred-seventy-one","repository":"asia","path":"pakistan/punjab/gojra/chak-three-hundred-seventy-one","depth":4,"parent":"pakistan/punjab/gojra","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
