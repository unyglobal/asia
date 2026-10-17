// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"morning-glory-subdivision","repository":"asia","path":"philippines/central-luzon/san-jose-del-monte/morning-glory-subdivision","depth":4,"parent":"philippines/central-luzon/san-jose-del-monte","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
