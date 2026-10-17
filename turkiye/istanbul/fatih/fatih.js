// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"fatih","repository":"asia","path":"turkiye/istanbul/fatih","depth":3,"parent":"turkiye/istanbul","children":["capa","karagumruk","topkap"]});
export const childModules = Object.freeze({"capa":"./capa/capa.js","karagumruk":"./karagumruk/karagumruk.js","topkap":"./topkap/topkap.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
