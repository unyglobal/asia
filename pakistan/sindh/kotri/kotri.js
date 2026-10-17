// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kotri","repository":"asia","path":"pakistan/sindh/kotri","depth":3,"parent":"pakistan/sindh","children":["dariabad-colony","nanga-line","pathan-colony","shah-latif-colony"]});
export const childModules = Object.freeze({"dariabad-colony":"./dariabad-colony/dariabad-colony.js","nanga-line":"./nanga-line/nanga-line.js","pathan-colony":"./pathan-colony/pathan-colony.js","shah-latif-colony":"./shah-latif-colony/shah-latif-colony.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
