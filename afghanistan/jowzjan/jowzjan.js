// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"jowzjan","repository":"asia","path":"afghanistan/jowzjan","depth":2,"parent":"afghanistan","children":["qarqin","shibirghan"]});
export const childModules = Object.freeze({"qarqin":"./qarqin/qarqin.js","shibirghan":"./shibirghan/shibirghan.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
