// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"gilgit-baltistan","repository":"asia","path":"pakistan/gilgit-baltistan","depth":2,"parent":"pakistan","children":["gilgit","jaglot","karimabad","skardu"]});
export const childModules = Object.freeze({"gilgit":"./gilgit/gilgit.js","jaglot":"./jaglot/jaglot.js","karimabad":"./karimabad/karimabad.js","skardu":"./skardu/skardu.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
