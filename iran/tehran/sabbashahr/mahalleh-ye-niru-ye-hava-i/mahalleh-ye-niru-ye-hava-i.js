// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"mahalleh-ye-niru-ye-hava-i","repository":"asia","path":"iran/tehran/sabbashahr/mahalleh-ye-niru-ye-hava-i","depth":4,"parent":"iran/tehran/sabbashahr","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
