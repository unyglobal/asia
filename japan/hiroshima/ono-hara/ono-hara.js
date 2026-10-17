// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ono-hara","repository":"asia","path":"japan/hiroshima/ono-hara","depth":3,"parent":"japan/hiroshima","children":["hayashigahara","maruishi","okishioya","shioya"]});
export const childModules = Object.freeze({"hayashigahara":"./hayashigahara/hayashigahara.js","maruishi":"./maruishi/maruishi.js","okishioya":"./okishioya/okishioya.js","shioya":"./shioya/shioya.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
