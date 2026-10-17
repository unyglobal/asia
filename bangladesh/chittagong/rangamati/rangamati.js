// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"rangamati","repository":"asia","path":"bangladesh/chittagong/rangamati","depth":3,"parent":"bangladesh/chittagong","children":["tabalchari"]});
export const childModules = Object.freeze({"tabalchari":"./tabalchari/tabalchari.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
