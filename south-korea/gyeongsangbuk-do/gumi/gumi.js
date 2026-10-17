// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"gumi","repository":"asia","path":"south-korea/gyeongsangbuk-do/gumi","depth":3,"parent":"south-korea/gyeongsangbuk-do","children":["hyonggogil-tong"]});
export const childModules = Object.freeze({"hyonggogil-tong":"./hyonggogil-tong/hyonggogil-tong.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
