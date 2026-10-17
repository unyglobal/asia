// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"oevoerhangay","repository":"asia","path":"mongolia/oevoerhangay","depth":2,"parent":"mongolia","children":["arvayheer","bogd"]});
export const childModules = Object.freeze({"arvayheer":"./arvayheer/arvayheer.js","bogd":"./bogd/bogd.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
