// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"muang-xay","repository":"asia","path":"laos/oudomxai/muang-xay","depth":3,"parent":"laos/oudomxai","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
