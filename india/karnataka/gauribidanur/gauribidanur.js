// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"gauribidanur","repository":"asia","path":"india/karnataka/gauribidanur","depth":3,"parent":"india/karnataka","children":["irampalli"]});
export const childModules = Object.freeze({"irampalli":"./irampalli/irampalli.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
