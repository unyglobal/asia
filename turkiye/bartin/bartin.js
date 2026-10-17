// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"bartin","repository":"asia","path":"turkiye/bartin","depth":2,"parent":"turkiye","children":["bart-n"]});
export const childModules = Object.freeze({"bart-n":"./bart-n/bart-n.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
