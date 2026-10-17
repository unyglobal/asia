// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"jambi","repository":"asia","path":"indonesia/jambi","depth":2,"parent":"indonesia","children":["jambi-city","kuala-tungkal","mendaha","muara-bungo","simpang","sungai-penuh"]});
export const childModules = Object.freeze({"jambi-city":"./jambi-city/jambi-city.js","kuala-tungkal":"./kuala-tungkal/kuala-tungkal.js","mendaha":"./mendaha/mendaha.js","muara-bungo":"./muara-bungo/muara-bungo.js","simpang":"./simpang/simpang.js","sungai-penuh":"./sungai-penuh/sungai-penuh.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
