// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"pishva","repository":"asia","path":"iran/tehran/pishva","depth":3,"parent":"iran/tehran","children":["shahrak-e-panzdah-khordad"]});
export const childModules = Object.freeze({"shahrak-e-panzdah-khordad":"./shahrak-e-panzdah-khordad/shahrak-e-panzdah-khordad.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
