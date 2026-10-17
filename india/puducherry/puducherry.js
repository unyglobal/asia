// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"puducherry","repository":"asia","path":"india/puducherry","depth":2,"parent":"india","children":["ariyankuppam","gundupalaiyam","karaikal","kunnimangalam","kurumbapet","madayi","manaveli","villianur"]});
export const childModules = Object.freeze({"ariyankuppam":"./ariyankuppam/ariyankuppam.js","gundupalaiyam":"./gundupalaiyam/gundupalaiyam.js","karaikal":"./karaikal/karaikal.js","kunnimangalam":"./kunnimangalam/kunnimangalam.js","kurumbapet":"./kurumbapet/kurumbapet.js","madayi":"./madayi/madayi.js","manaveli":"./manaveli/manaveli.js","villianur":"./villianur/villianur.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
