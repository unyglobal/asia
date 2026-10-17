// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"tak","repository":"asia","path":"thailand/tak","depth":2,"parent":"thailand","children":["ban-tak","mae-ramat","mae-sot"]});
export const childModules = Object.freeze({"ban-tak":"./ban-tak/ban-tak.js","mae-ramat":"./mae-ramat/mae-ramat.js","mae-sot":"./mae-sot/mae-sot.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
