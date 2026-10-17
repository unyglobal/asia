// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"albu-kamal","repository":"asia","path":"syria/deir-ez-zor/albu-kamal","depth":3,"parent":"syria/deir-ez-zor","children":["hayy-al-katif"]});
export const childModules = Object.freeze({"hayy-al-katif":"./hayy-al-katif/hayy-al-katif.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
