// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"izumisano","repository":"asia","path":"japan/osaka/izumisano","depth":3,"parent":"japan/osaka","children":["minato","onishi","shimmachi","uemachi"]});
export const childModules = Object.freeze({"minato":"./minato/minato.js","onishi":"./onishi/onishi.js","shimmachi":"./shimmachi/shimmachi.js","uemachi":"./uemachi/uemachi.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
