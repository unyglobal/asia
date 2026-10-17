// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"punch","repository":"asia","path":"india/jammu-and-kashmir/punch","depth":3,"parent":"india/jammu-and-kashmir","children":["dungas","kazi-molna"]});
export const childModules = Object.freeze({"dungas":"./dungas/dungas.js","kazi-molna":"./kazi-molna/kazi-molna.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
