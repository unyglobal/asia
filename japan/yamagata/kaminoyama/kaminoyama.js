// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kaminoyama","repository":"asia","path":"japan/yamagata/kaminoyama","depth":3,"parent":"japan/yamagata","children":["kawasaki","kitamachi","matsuyama","sakaemachi"]});
export const childModules = Object.freeze({"kawasaki":"./kawasaki/kawasaki.js","kitamachi":"./kitamachi/kitamachi.js","matsuyama":"./matsuyama/matsuyama.js","sakaemachi":"./sakaemachi/sakaemachi.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
