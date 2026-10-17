// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ermera","repository":"asia","path":"timor-leste/ermera","depth":2,"parent":"timor-leste","children":["atsabe"]});
export const childModules = Object.freeze({"atsabe":"./atsabe/atsabe.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
