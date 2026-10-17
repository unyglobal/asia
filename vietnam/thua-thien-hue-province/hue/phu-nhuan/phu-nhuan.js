// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"phu-nhuan","repository":"asia","path":"vietnam/thua-thien-hue-province/hue/phu-nhuan","depth":4,"parent":"vietnam/thua-thien-hue-province/hue","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
