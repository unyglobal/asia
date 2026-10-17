// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"saginomiya","repository":"asia","path":"japan/tokyo/saginomiya","depth":3,"parent":"japan/tokyo","children":["kamisaginomiya"]});
export const childModules = Object.freeze({"kamisaginomiya":"./kamisaginomiya/kamisaginomiya.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
