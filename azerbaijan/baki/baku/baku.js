// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"baku","repository":"asia","path":"azerbaijan/baki/baku","depth":3,"parent":"azerbaijan/baki","children":["cherni-gorod"]});
export const childModules = Object.freeze({"cherni-gorod":"./cherni-gorod/cherni-gorod.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
