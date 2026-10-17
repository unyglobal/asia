// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"petah-tiqva","repository":"asia","path":"israel/central-district/petah-tiqva","depth":3,"parent":"israel/central-district","children":["en-gannim"]});
export const childModules = Object.freeze({"en-gannim":"./en-gannim/en-gannim.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
