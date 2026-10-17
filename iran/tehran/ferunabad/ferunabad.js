// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ferunabad","repository":"asia","path":"iran/tehran/ferunabad","depth":3,"parent":"iran/tehran","children":["shahrak-e-vali-asr"]});
export const childModules = Object.freeze({"shahrak-e-vali-asr":"./shahrak-e-vali-asr/shahrak-e-vali-asr.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
