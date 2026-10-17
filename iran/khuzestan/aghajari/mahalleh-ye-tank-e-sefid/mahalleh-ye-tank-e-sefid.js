// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"mahalleh-ye-tank-e-sefid","repository":"asia","path":"iran/khuzestan/aghajari/mahalleh-ye-tank-e-sefid","depth":4,"parent":"iran/khuzestan/aghajari","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
