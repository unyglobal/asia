// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ahmadpur-east","repository":"asia","path":"pakistan/punjab/ahmadpur-east","depth":3,"parent":"pakistan/punjab","children":["satellite-town"]});
export const childModules = Object.freeze({"satellite-town":"./satellite-town/satellite-town.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
