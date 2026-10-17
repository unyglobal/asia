// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"sirdaryo-region","repository":"asia","path":"uzbekistan/sirdaryo-region","depth":2,"parent":"uzbekistan","children":["guliston","sirdaryo","yangiyer"]});
export const childModules = Object.freeze({"guliston":"./guliston/guliston.js","sirdaryo":"./sirdaryo/sirdaryo.js","yangiyer":"./yangiyer/yangiyer.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
