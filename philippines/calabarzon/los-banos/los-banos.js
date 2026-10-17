// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"los-banos","repository":"asia","path":"philippines/calabarzon/los-banos","depth":3,"parent":"philippines/calabarzon","children":["mary-mount-village","mendiola-subdivision","rhoda-subdivision","san-antonio"]});
export const childModules = Object.freeze({"mary-mount-village":"./mary-mount-village/mary-mount-village.js","mendiola-subdivision":"./mendiola-subdivision/mendiola-subdivision.js","rhoda-subdivision":"./rhoda-subdivision/rhoda-subdivision.js","san-antonio":"./san-antonio/san-antonio.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
