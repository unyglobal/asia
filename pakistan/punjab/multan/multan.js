// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"multan","repository":"asia","path":"pakistan/punjab/multan","depth":3,"parent":"pakistan/punjab","children":["rukh-i-alam"]});
export const childModules = Object.freeze({"rukh-i-alam":"./rukh-i-alam/rukh-i-alam.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
