// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"maebaru-chuo","repository":"asia","path":"japan/fukuoka/maebaru-chuo","depth":3,"parent":"japan/fukuoka","children":["maebarukita","maebaruminami","maebarunishi"]});
export const childModules = Object.freeze({"maebarukita":"./maebarukita/maebarukita.js","maebaruminami":"./maebaruminami/maebaruminami.js","maebarunishi":"./maebarunishi/maebarunishi.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
