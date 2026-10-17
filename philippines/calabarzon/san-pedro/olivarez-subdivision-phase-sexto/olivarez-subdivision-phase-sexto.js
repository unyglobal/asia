// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"olivarez-subdivision-phase-sexto","repository":"asia","path":"philippines/calabarzon/san-pedro/olivarez-subdivision-phase-sexto","depth":4,"parent":"philippines/calabarzon/san-pedro","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
