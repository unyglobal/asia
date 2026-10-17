// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"tovuz-district","repository":"asia","path":"azerbaijan/tovuz-district","depth":2,"parent":"azerbaijan","children":["govlar"]});
export const childModules = Object.freeze({"govlar":"./govlar/govlar.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
