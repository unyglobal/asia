// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"davao","repository":"asia","path":"philippines/davao-region/davao","depth":3,"parent":"philippines/davao-region","children":["barangay-13-b"]});
export const childModules = Object.freeze({"barangay-13-b":"./barangay-13-b/barangay-13-b.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
