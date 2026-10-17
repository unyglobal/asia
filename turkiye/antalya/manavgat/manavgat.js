// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"manavgat","repository":"asia","path":"turkiye/antalya/manavgat","depth":3,"parent":"turkiye/antalya","children":["asag-hisar","bahcelievler","caglayan","yukar-pazarc"]});
export const childModules = Object.freeze({"asag-hisar":"./asag-hisar/asag-hisar.js","bahcelievler":"./bahcelievler/bahcelievler.js","caglayan":"./caglayan/caglayan.js","yukar-pazarc":"./yukar-pazarc/yukar-pazarc.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
