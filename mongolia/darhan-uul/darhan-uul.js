// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"darhan-uul","repository":"asia","path":"mongolia/darhan-uul","depth":2,"parent":"mongolia","children":["darhan"]});
export const childModules = Object.freeze({"darhan":"./darhan/darhan.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
