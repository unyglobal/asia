// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"anantnag","repository":"asia","path":"india/jammu-and-kashmir/anantnag","depth":3,"parent":"india/jammu-and-kashmir","children":["sarnal"]});
export const childModules = Object.freeze({"sarnal":"./sarnal/sarnal.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
