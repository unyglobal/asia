// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"neizhuang","repository":"asia","path":"taiwan/taiwan/chaozhou/neizhuang","depth":4,"parent":"taiwan/taiwan/chaozhou","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
