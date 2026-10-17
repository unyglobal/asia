// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"east-gobi-aymag","repository":"asia","path":"mongolia/east-gobi-aymag","depth":2,"parent":"mongolia","children":["saynshand"]});
export const childModules = Object.freeze({"saynshand":"./saynshand/saynshand.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
