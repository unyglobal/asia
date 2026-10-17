// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"amasya","repository":"asia","path":"turkiye/amasya","depth":2,"parent":"turkiye","children":["merzifon","suluova","tasova"]});
export const childModules = Object.freeze({"merzifon":"./merzifon/merzifon.js","suluova":"./suluova/suluova.js","tasova":"./tasova/tasova.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
