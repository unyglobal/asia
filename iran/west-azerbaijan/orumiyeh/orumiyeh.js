// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"orumiyeh","repository":"asia","path":"iran/west-azerbaijan/orumiyeh","depth":3,"parent":"iran/west-azerbaijan","children":["bazarbash"]});
export const childModules = Object.freeze({"bazarbash":"./bazarbash/bazarbash.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
