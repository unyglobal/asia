// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"as-salihiyah","repository":"asia","path":"kuwait/al-asimah/kuwait-city/as-salihiyah","depth":4,"parent":"kuwait/al-asimah/kuwait-city","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
