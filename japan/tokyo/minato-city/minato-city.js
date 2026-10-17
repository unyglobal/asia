// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"minato-city","repository":"asia","path":"japan/tokyo/minato-city","depth":3,"parent":"japan/tokyo","children":["hamamatsucho","shibadaimon","shibakoen"]});
export const childModules = Object.freeze({"hamamatsucho":"./hamamatsucho/hamamatsucho.js","shibadaimon":"./shibadaimon/shibadaimon.js","shibakoen":"./shibakoen/shibakoen.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
