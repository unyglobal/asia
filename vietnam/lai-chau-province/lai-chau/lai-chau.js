// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"lai-chau","repository":"asia","path":"vietnam/lai-chau-province/lai-chau","depth":3,"parent":"vietnam/lai-chau-province","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
