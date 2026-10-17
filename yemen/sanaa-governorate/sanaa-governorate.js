// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"sanaa-governorate","repository":"asia","path":"yemen/sanaa-governorate","depth":2,"parent":"yemen","children":["sahar","sayyan"]});
export const childModules = Object.freeze({"sahar":"./sahar/sahar.js","sayyan":"./sayyan/sayyan.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
