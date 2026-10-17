// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"nor-nork","repository":"asia","path":"armenia/yerevan/nor-nork","depth":3,"parent":"armenia/yerevan","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
