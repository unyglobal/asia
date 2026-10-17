// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"karak","repository":"asia","path":"jordan/karak","depth":2,"parent":"jordan","children":["izra","karak-city","safi"]});
export const childModules = Object.freeze({"izra":"./izra/izra.js","karak-city":"./karak-city/karak-city.js","safi":"./safi/safi.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
