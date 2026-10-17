// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"sabbashahr","repository":"asia","path":"iran/tehran/sabbashahr","depth":3,"parent":"iran/tehran","children":["mahalleh-ye-niru-ye-hava-i"]});
export const childModules = Object.freeze({"mahalleh-ye-niru-ye-hava-i":"./mahalleh-ye-niru-ye-hava-i/mahalleh-ye-niru-ye-hava-i.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
