// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"bandar-e-anzali","repository":"asia","path":"iran/gilan-province/bandar-e-anzali","depth":3,"parent":"iran/gilan-province","children":["mian-poshteh"]});
export const childModules = Object.freeze({"mian-poshteh":"./mian-poshteh/mian-poshteh.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
