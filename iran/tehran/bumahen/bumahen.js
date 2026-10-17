// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"bumahen","repository":"asia","path":"iran/tehran/bumahen","depth":3,"parent":"iran/tehran","children":["shahrak-e-vali-ye-asr"]});
export const childModules = Object.freeze({"shahrak-e-vali-ye-asr":"./shahrak-e-vali-ye-asr/shahrak-e-vali-ye-asr.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
