// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"jahanian","repository":"asia","path":"pakistan/punjab/jahanian","depth":3,"parent":"pakistan/punjab","children":["chak-one-hundred-eleven-ten-right"]});
export const childModules = Object.freeze({"chak-one-hundred-eleven-ten-right":"./chak-one-hundred-eleven-ten-right/chak-one-hundred-eleven-ten-right.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
