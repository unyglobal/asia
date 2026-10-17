// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"yehud","repository":"asia","path":"israel/central-district/yehud","depth":3,"parent":"israel/central-district","children":["bet-shemu-el"]});
export const childModules = Object.freeze({"bet-shemu-el":"./bet-shemu-el/bet-shemu-el.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
