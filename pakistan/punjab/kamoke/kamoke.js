// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kamoke","repository":"asia","path":"pakistan/punjab/kamoke","depth":3,"parent":"pakistan/punjab","children":["mahalla-baba-jani"]});
export const childModules = Object.freeze({"mahalla-baba-jani":"./mahalla-baba-jani/mahalla-baba-jani.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
