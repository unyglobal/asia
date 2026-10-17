// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"mabalacat-city","repository":"asia","path":"philippines/central-luzon/mabalacat-city","depth":3,"parent":"philippines/central-luzon","children":["poblacion"]});
export const childModules = Object.freeze({"poblacion":"./poblacion/poblacion.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
