// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"port-blair","repository":"asia","path":"india/andaman-and-nicobar/port-blair","depth":3,"parent":"india/andaman-and-nicobar","children":["atlanta-point"]});
export const childModules = Object.freeze({"atlanta-point":"./atlanta-point/atlanta-point.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
