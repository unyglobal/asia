// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"haq-baho","repository":"asia","path":"pakistan/balochistan/usta-muhammad/haq-baho","depth":4,"parent":"pakistan/balochistan/usta-muhammad","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
