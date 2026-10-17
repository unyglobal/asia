// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"abadan","repository":"asia","path":"iran/khuzestan/abadan","depth":3,"parent":"iran/khuzestan","children":["bavardeh-ye-shomali","darya","jamshidabad"]});
export const childModules = Object.freeze({"bavardeh-ye-shomali":"./bavardeh-ye-shomali/bavardeh-ye-shomali.js","darya":"./darya/darya.js","jamshidabad":"./jamshidabad/jamshidabad.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
