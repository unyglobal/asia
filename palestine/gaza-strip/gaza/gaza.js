// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"gaza","repository":"asia","path":"palestine/gaza-strip/gaza","depth":3,"parent":"palestine/gaza-strip","children":["maydan-ash-shuja-iyah"]});
export const childModules = Object.freeze({"maydan-ash-shuja-iyah":"./maydan-ash-shuja-iyah/maydan-ash-shuja-iyah.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
