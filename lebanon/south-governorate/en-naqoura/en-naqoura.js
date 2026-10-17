// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"en-naqoura","repository":"asia","path":"lebanon/south-governorate/en-naqoura","depth":3,"parent":"lebanon/south-governorate","children":["ech-choumara"]});
export const childModules = Object.freeze({"ech-choumara":"./ech-choumara/ech-choumara.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
