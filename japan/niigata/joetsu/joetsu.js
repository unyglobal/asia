// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"joetsu","repository":"asia","path":"japan/niigata/joetsu","depth":3,"parent":"japan/niigata","children":["kasugano","kasugayamamachi","kida","shinkocho"]});
export const childModules = Object.freeze({"kasugano":"./kasugano/kasugano.js","kasugayamamachi":"./kasugayamamachi/kasugayamamachi.js","kida":"./kida/kida.js","shinkocho":"./shinkocho/shinkocho.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
