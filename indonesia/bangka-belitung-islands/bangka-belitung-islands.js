// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"bangka-belitung-islands","repository":"asia","path":"indonesia/bangka-belitung-islands","depth":2,"parent":"indonesia","children":["manggar","muntok","pangkalpinang","sungailiat","tanjung-pandan"]});
export const childModules = Object.freeze({"manggar":"./manggar/manggar.js","muntok":"./muntok/muntok.js","pangkalpinang":"./pangkalpinang/pangkalpinang.js","sungailiat":"./sungailiat/sungailiat.js","tanjung-pandan":"./tanjung-pandan/tanjung-pandan.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
