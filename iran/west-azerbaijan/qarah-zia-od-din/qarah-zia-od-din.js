// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"qarah-zia-od-din","repository":"asia","path":"iran/west-azerbaijan/qarah-zia-od-din","depth":3,"parent":"iran/west-azerbaijan","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
