// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kozhikode","repository":"asia","path":"india/kerala/kozhikode","depth":3,"parent":"india/kerala","children":["nagaram"]});
export const childModules = Object.freeze({"nagaram":"./nagaram/nagaram.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
