// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"hamidiyeh","repository":"asia","path":"iran/khuzestan/hamidiyeh","depth":3,"parent":"iran/khuzestan","children":["hamidiyeh-ye-sofla"]});
export const childModules = Object.freeze({"hamidiyeh-ye-sofla":"./hamidiyeh-ye-sofla/hamidiyeh-ye-sofla.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
