// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"gorgan","repository":"asia","path":"iran/golestan/gorgan","depth":3,"parent":"iran/golestan","children":["mahalleh-ye-gorgan-e-jadid"]});
export const childModules = Object.freeze({"mahalleh-ye-gorgan-e-jadid":"./mahalleh-ye-gorgan-e-jadid/mahalleh-ye-gorgan-e-jadid.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
