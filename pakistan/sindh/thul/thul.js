// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"thul","repository":"asia","path":"pakistan/sindh/thul","depth":3,"parent":"pakistan/sindh","children":["goth-fateh-muhammad-dasti","muhammad-salim-nunari"]});
export const childModules = Object.freeze({"goth-fateh-muhammad-dasti":"./goth-fateh-muhammad-dasti/goth-fateh-muhammad-dasti.js","muhammad-salim-nunari":"./muhammad-salim-nunari/muhammad-salim-nunari.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
