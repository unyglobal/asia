// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ooty","repository":"asia","path":"india/tamil-nadu/ooty","depth":3,"parent":"india/tamil-nadu","children":["kandalmund","mettucheri"]});
export const childModules = Object.freeze({"kandalmund":"./kandalmund/kandalmund.js","mettucheri":"./mettucheri/mettucheri.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
