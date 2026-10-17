// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"jauharabad","repository":"asia","path":"pakistan/punjab/jauharabad","depth":3,"parent":"pakistan/punjab","children":["alawan-town","bodan-da-bhan"]});
export const childModules = Object.freeze({"alawan-town":"./alawan-town/alawan-town.js","bodan-da-bhan":"./bodan-da-bhan/bodan-da-bhan.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
