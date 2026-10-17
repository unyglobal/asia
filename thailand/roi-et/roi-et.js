// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"roi-et","repository":"asia","path":"thailand/roi-et","depth":2,"parent":"thailand","children":["ban-selaphum","kaset-wisai"]});
export const childModules = Object.freeze({"ban-selaphum":"./ban-selaphum/ban-selaphum.js","kaset-wisai":"./kaset-wisai/kaset-wisai.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
