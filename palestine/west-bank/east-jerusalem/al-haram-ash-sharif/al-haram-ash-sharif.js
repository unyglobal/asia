// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"al-haram-ash-sharif","repository":"asia","path":"palestine/west-bank/east-jerusalem/al-haram-ash-sharif","depth":4,"parent":"palestine/west-bank/east-jerusalem","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
