// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ad-dahiyah","repository":"asia","path":"palestine/west-bank/balatah/ad-dahiyah","depth":4,"parent":"palestine/west-bank/balatah","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
