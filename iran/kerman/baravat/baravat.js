// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"baravat","repository":"asia","path":"iran/kerman/baravat","depth":3,"parent":"iran/kerman","children":["mahalleh-ye-baravat-e-vasati"]});
export const childModules = Object.freeze({"mahalleh-ye-baravat-e-vasati":"./mahalleh-ye-baravat-e-vasati/mahalleh-ye-baravat-e-vasati.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
