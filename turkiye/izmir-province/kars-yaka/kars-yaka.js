// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kars-yaka","repository":"asia","path":"turkiye/izmir-province/kars-yaka","depth":3,"parent":"turkiye/izmir-province","children":["tuna"]});
export const childModules = Object.freeze({"tuna":"./tuna/tuna.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
