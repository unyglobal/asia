// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"panipat","repository":"asia","path":"india/haryana/panipat","depth":3,"parent":"india/haryana","children":["gurudwara"]});
export const childModules = Object.freeze({"gurudwara":"./gurudwara/gurudwara.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
