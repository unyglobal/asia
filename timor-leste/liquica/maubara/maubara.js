// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"maubara","repository":"asia","path":"timor-leste/liquica/maubara","depth":3,"parent":"timor-leste/liquica","children":["vavikinia"]});
export const childModules = Object.freeze({"vavikinia":"./vavikinia/vavikinia.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
