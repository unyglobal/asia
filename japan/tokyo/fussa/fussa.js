// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"fussa","repository":"asia","path":"japan/tokyo/fussa","depth":3,"parent":"japan/tokyo","children":["tamagawa"]});
export const childModules = Object.freeze({"tamagawa":"./tamagawa/tamagawa.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
