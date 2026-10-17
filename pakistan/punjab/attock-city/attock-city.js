// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"attock-city","repository":"asia","path":"pakistan/punjab/attock-city","depth":3,"parent":"pakistan/punjab","children":["mahalla-karbia"]});
export const childModules = Object.freeze({"mahalla-karbia":"./mahalla-karbia/mahalla-karbia.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
