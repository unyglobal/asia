// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ashdod","repository":"asia","path":"israel/southern-district/ashdod","depth":3,"parent":"israel/southern-district","children":["rova-hakirya","rova-haqirya","rova-he","rova-het","rova-vav"]});
export const childModules = Object.freeze({"rova-hakirya":"./rova-hakirya/rova-hakirya.js","rova-haqirya":"./rova-haqirya/rova-haqirya.js","rova-he":"./rova-he/rova-he.js","rova-het":"./rova-het/rova-het.js","rova-vav":"./rova-vav/rova-vav.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
