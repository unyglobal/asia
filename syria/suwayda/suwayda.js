// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"suwayda","repository":"asia","path":"syria/suwayda","depth":2,"parent":"syria","children":["as-suwayda"]});
export const childModules = Object.freeze({"as-suwayda":"./as-suwayda/as-suwayda.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
