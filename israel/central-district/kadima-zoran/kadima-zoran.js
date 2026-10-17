// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kadima-zoran","repository":"asia","path":"israel/central-district/kadima-zoran","depth":3,"parent":"israel/central-district","children":["yatsiv"]});
export const childModules = Object.freeze({"yatsiv":"./yatsiv/yatsiv.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
