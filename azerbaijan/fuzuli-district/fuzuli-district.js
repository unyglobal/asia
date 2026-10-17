// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"fuzuli-district","repository":"asia","path":"azerbaijan/fuzuli-district","depth":2,"parent":"azerbaijan","children":["fuzuli"]});
export const childModules = Object.freeze({"fuzuli":"./fuzuli/fuzuli.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
