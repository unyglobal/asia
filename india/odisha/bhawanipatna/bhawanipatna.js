// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"bhawanipatna","repository":"asia","path":"india/odisha/bhawanipatna","depth":3,"parent":"india/odisha","children":["barpara","paradesipara"]});
export const childModules = Object.freeze({"barpara":"./barpara/barpara.js","paradesipara":"./paradesipara/paradesipara.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
