// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"selenge-province","repository":"asia","path":"mongolia/selenge-province","depth":2,"parent":"mongolia","children":["dzuunharaa","suhbaatar"]});
export const childModules = Object.freeze({"dzuunharaa":"./dzuunharaa/dzuunharaa.js","suhbaatar":"./suhbaatar/suhbaatar.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
