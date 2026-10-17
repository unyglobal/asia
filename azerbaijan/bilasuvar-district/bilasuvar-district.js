// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"bilasuvar-district","repository":"asia","path":"azerbaijan/bilasuvar-district","depth":2,"parent":"azerbaijan","children":["pushkino"]});
export const childModules = Object.freeze({"pushkino":"./pushkino/pushkino.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
