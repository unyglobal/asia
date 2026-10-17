// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"liquica","repository":"asia","path":"timor-leste/liquica","depth":2,"parent":"timor-leste","children":["likisa","maubara"]});
export const childModules = Object.freeze({"likisa":"./likisa/likisa.js","maubara":"./maubara/maubara.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
