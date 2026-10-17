// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"dera-ghazi-khan","repository":"asia","path":"pakistan/punjab/dera-ghazi-khan","depth":3,"parent":"pakistan/punjab","children":["qaimwala","rasulpur"]});
export const childModules = Object.freeze({"qaimwala":"./qaimwala/qaimwala.js","rasulpur":"./rasulpur/rasulpur.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
