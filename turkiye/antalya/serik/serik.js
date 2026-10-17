// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"serik","repository":"asia","path":"turkiye/antalya/serik","depth":3,"parent":"turkiye/antalya","children":["merkez","orta"]});
export const childModules = Object.freeze({"merkez":"./merkez/merkez.js","orta":"./orta/orta.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
