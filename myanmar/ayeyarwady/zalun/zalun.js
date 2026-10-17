// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"zalun","repository":"asia","path":"myanmar/ayeyarwady/zalun","depth":3,"parent":"myanmar/ayeyarwady","children":["kan-nar"]});
export const childModules = Object.freeze({"kan-nar":"./kan-nar/kan-nar.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
