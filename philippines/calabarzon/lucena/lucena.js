// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"lucena","repository":"asia","path":"philippines/calabarzon/lucena","depth":3,"parent":"philippines/calabarzon","children":["barangay-cotta","barangay-ix","barangay-x","mayao-crossing"]});
export const childModules = Object.freeze({"barangay-cotta":"./barangay-cotta/barangay-cotta.js","barangay-ix":"./barangay-ix/barangay-ix.js","barangay-x":"./barangay-x/barangay-x.js","mayao-crossing":"./mayao-crossing/mayao-crossing.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
