// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"muong-lay","repository":"asia","path":"vietnam/gjien-bien-province/muong-lay","depth":3,"parent":"vietnam/gjien-bien-province","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
