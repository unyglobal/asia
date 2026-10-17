// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"al-fahd","repository":"asia","path":"saudi-arabia/asir-region/sarat-abidah/al-fahd","depth":4,"parent":"saudi-arabia/asir-region/sarat-abidah","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
