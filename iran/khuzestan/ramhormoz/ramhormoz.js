// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ramhormoz","repository":"asia","path":"iran/khuzestan/ramhormoz","depth":3,"parent":"iran/khuzestan","children":["shahrak-e-maskuni-ye-janbazan"]});
export const childModules = Object.freeze({"shahrak-e-maskuni-ye-janbazan":"./shahrak-e-maskuni-ye-janbazan/shahrak-e-maskuni-ye-janbazan.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
