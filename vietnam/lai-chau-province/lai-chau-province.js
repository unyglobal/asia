// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"lai-chau-province","repository":"asia","path":"vietnam/lai-chau-province","depth":2,"parent":"vietnam","children":["lai-chau"]});
export const childModules = Object.freeze({"lai-chau":"./lai-chau/lai-chau.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
