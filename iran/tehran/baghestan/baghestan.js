// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"baghestan","repository":"asia","path":"iran/tehran/baghestan","depth":3,"parent":"iran/tehran","children":["shahrak-e-sadeqiyeh"]});
export const childModules = Object.freeze({"shahrak-e-sadeqiyeh":"./shahrak-e-sadeqiyeh/shahrak-e-sadeqiyeh.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
